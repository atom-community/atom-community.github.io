import { LitElement, css, customElement, html, TemplateResult, property } from "lit-element"

@customElement("type-doc")
export class TypeDoc extends LitElement {
  static readonly styles = css`
    :host {
      position: relative;
      max-width: 100%;
      display: grid;
      grid-template-areas: "head" "body";
      grid-template-rows: min-content 1fr;
      margin-bottom: 1rem;
    }

    .visually-hidden {
      position: absolute;
      clip: rect(1px, 1px, 1px, 1px);
    }

    header {
      display: flex;
      align-items: center;
      gap: 16px;
      flex-flow: row wrap;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      background: var(--type-doc-header-background-color, var(--markdown-blockquote-color, #c9e3ff));
      padding: 6px 10px;
      transition: background 0.2s ease-in-out;
    }

    :host([data-inherited-from]) header {
      justify-content: space-between;
      overflow-x: hidden;
    }

    :host([data-inherited-from]:not([expanded])) header {
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
      background: var(--markdown-syntax-background-color);
    }

    :host([data-inherited-from]) header ::slotted([slot="name"]) {
      cursor: pointer;
    }

    :host([data-inherited-from]) header ::slotted([slot="type"]) {
      display: none !important;
    }

    type-doc:not([data-inherited-from]) [slot="type"]::before {
      content: "type: ";
    }

    #inheritance {
      margin-inline-start: auto;
    }

    #inheritance button {
      color: inherit;
      background: none;
      border: none;
      margin-inline-end: 3px;
    }

    #inheritance button,
    #inheritance button svg {
      height: 24px;
      width: 24px;
      transform: rotate(0deg);
      transition: transform 0.2s ease-in-out;
    }

    :host([expanded]) #inheritance button svg {
      transform: rotate(180deg);
    }

    #body {
      background: var(--type-doc-body-background-color, #f6f8fa);
      padding: 1rem 1.6rem;
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
    }

    #body ::slotted(p:last-child) {
      margin: 0 !important;
    }

    #body ::slotted(h3) {
      margin-top: 4px !important;
    }

    #body ::slotted(.returns + p:last-child) {
      float: right;
    }

    /* nested type-doc */
    #body ::slotted(type-doc) {
      margin-bottom: 0.6rem;
      background: transparent;
      padding: 0 0.8rem;
    }

    #body ::slotted(type-doc[kind$="parameter"]) {
      border-inline-start: 4px solid var(--type-doc-header-background-color, var(--markdown-blockquote-color, #c9e3ff));
    }

    :host([kind$="parameter"]) header {
      padding-top: 0;
      padding-bottom: 0;
      margin-bottom: 3px;
    }

    :host([kind="return"]) header,
    :host([kind$="parameter"]) header {
      background: none;
      padding-left: 0;
    }

    :host([kind="return"]) #body,
    :host([kind$="parameter"]) #body {
      padding: 0;
    }

    #body,
    header,
    #body ::slotted(:not(type-doc)) {
      max-width: 100%;
    }

    @media (max-width: 640px) {
      #body,
      header,
      #body ::slotted(:not(type-doc):not(h2):not(h3)) {
        overflow: auto;
      }
    }
  `

  declare shadowRoot: ShadowRoot

  @property({ type: Boolean, reflect: true }) expanded = false

  render(): TemplateResult {
    const isInherited = this.hasAttribute("data-inherited-from")
    const { expanded } = this
    return html`
      <header>
        <span aria-hidden="true" @click="${this.toggleInherited}" @slotchange="${this.cloneHeading}">
          <slot name="name"></slot>
        </span>
        <span class="visually-hidden"></span>
        <slot name="attribute"></slot>
        <slot name="type"></slot>
        <span id="inheritance" ?hidden="${!isInherited}">
          <slot name="inheritance"></slot>
          <button
            id="toggle"
            aria-label="Toggle details"
            aria-expanded="${expanded}"
            aria-controls="body"
            @click="${this.toggleInherited}"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" fill="currentColor" />
            </svg>
          </button>
        </span>
      </header>
      <article id="body" ?hidden="${isInherited && !expanded}">
        <slot></slot>
      </article>
    `
  }

  firstUpdated() {
    this.cloneHeading()
  }

  private cloneHeading() {
    const hidden = this.shadowRoot.querySelector(".visually-hidden")
    if (!hidden) {
      return
    }
    for (const child of Array.from(hidden.children)) {
      child.remove()
    }
    const heading = this.querySelector('[slot="name"]')
    if (!heading) {
      return
    }
    hidden.append(heading.cloneNode(true))
  }

  private toggleInherited() {
    this.expanded = !this.expanded
  }
}
