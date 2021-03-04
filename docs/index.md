---
title: Atom Community
layout: layout-home.njk
slogan: Community Maintained Packages for Atom

callToActionItems:
  - text: Get Started
    href: /getting-started/
  - text: API
    href: /api/

features:
  - name: AutoComplete
    slug: autocomplete
    text: Once you have installed an IDE language package, this should work right away.

  - name: Linter
    slug: linter
    text: "[linter](https://atom.io/packages/linter) and [linter-ui](https://atom.io/packages/linter-ui-default) work with ide packages, letting you know what's wrong in your file."

  - name: Signature Help
    slug: sig-help
    text: "No more looking up API docs: automatically get function signature docs in your editor."

  - name: DataTip
    slug: datatip
    text: "The docs you need, when you need them. Hover or cursor to a name to show floating data tips."

  - name: Outline
    slug: outline
    text: Browse the structure of your code at a glance.

  - name: Go to Definition
    slug: definitions
    text: Jump to a name's definition. Navigate large codebases with ease.

---

<style data-helmet>

  #features {
    --feature-image-size: 180px;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    column-gap: 100px;
    row-gap: 40px;
    color: var(--text-color);
    margin-bottom: 2em;
  }

  #features article,
  #features .screenshot {
    display: grid;
  }

  #features .screenshot {
    align-content: center;
    width: var(--feature-image-size);
    height: var(--feature-image-size);
    overflow: hidden;
    border-radius: 100%;
    place-self: center;
  }

  #features .screenshot img {
    transform: scale(2, 2) translate(40px);
    height: auto;
    min-height: var(--feature-image-size);
    object-fit: cover;
  }
</style>

The original objective of the Facebook [Nuclide](https://nuclide.io) / [Atom-IDE](https://ide.atom.io) project has been to provide extension packages for the [Atom Editor](https://www.atom.io) to interact with custom Language Servers via the [Language Server Protocol](https://langserver.org) to enable IDE like functionality in our beloved editor.

The original package was made of various "subpackages" that provide the overall functionality and were always build and released in a monolithic extension (aka atom-ide-ui).

The objective of this project is to take over the concepts and ideas in the original atom-ide-ui package, but provide individual extensions that can be developed, released and installed independently.

We will start with the most important features, and iterate on them quickly to come on par with the functionality available in the atom-ide-ui package.


## Roadmap

We have published our current roadmap on [Github](https://github.com/atom-ide-community/atom-ide-community.github.io/issues/3#issue-424527067) for you to check and provide feedback to us.
