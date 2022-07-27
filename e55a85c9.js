import"./5969e7ee.js";import{r as e,s as t,$ as o}from"./8d94b22a.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const r=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(o){o.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(o){o.createProperty(t.key,e)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n=function(e,t,o,r){var n,d=arguments.length,i=d<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(i=(d<3?n(i):d>3?n(t,o,i):n(t,o))||i);return d>3&&i&&Object.defineProperty(t,o,i),i};let d=class extends t{constructor(){super(...arguments),this.expanded=!1}render(){const e=this.hasAttribute("data-inherited-from"),{expanded:t}=this;return o`
      <header>
        <span aria-hidden="true" @click="${this.toggleInherited}" @slotchange="${this.cloneHeading}">
          <slot name="name"></slot>
        </span>
        <span class="visually-hidden"></span>
        <slot name="attribute"></slot>
        <slot name="type"></slot>
        <span id="inheritance" ?hidden="${!e}">
          <slot name="inheritance"></slot>
          <button
            id="toggle"
            aria-label="Toggle details"
            aria-expanded="${t}"
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
      <article id="body" ?hidden="${e&&!t}">
        <slot></slot>
      </article>
    `}firstUpdated(){this.cloneHeading()}cloneHeading(){const e=this.shadowRoot.querySelector(".visually-hidden");if(!e)return;for(const t of Array.from(e.children))t.remove();const t=this.querySelector('[slot="name"]');t&&e.append(t.cloneNode(!0))}toggleInherited(){this.expanded=!this.expanded}};d.styles=e`
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
  `,n([function(e){return(t,o)=>void 0!==o?((e,t,o)=>{t.constructor.createProperty(o,e)})(e,t,o):r(e,t)}({type:Boolean,reflect:!0})],d.prototype,"expanded",void 0),d=n([(e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:o,elements:r}=t;return{kind:o,elements:r,finisher(t){window.customElements.define(e,t)}}})(e,t))("type-doc")],d);
