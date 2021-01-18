---
layout: home.njk
slogan: Community Maintained Packages for Atom
callToActionItems:
  - text: Get Started
    href: /getting-started/
  - text: API
    href: /api/
---

# Atom Community

## Objective

The original objective of the Facebook [Nuclide](https://nuclide.io) / [Atom-IDE](https://ide.atom.io) project has been to provide extension packages for the [Atom Editor](https://www.atom.io) to interact with custom Language Servers via the [Language Server Protocol](https://langserver.org) to enable IDE like functionality in our beloved editor.

The original package was made of various "subpackages" that provide the overall functionality and were always build and released in a monolithic extension (aka atom-ide-ui).

The objective of this project is to take over the concepts and ideas in the original atom-ide-ui package, but provide individual extensions that can be developed, released and installed independently.

We will start with the most important features, and iterate on them quickly to come on par with the functionality available in the atom-ide-ui package.


## Atom IDE Community Packages

### AutoComplete

Once you have installed an IDE language package, this should work right away.

![screenshot of autocomplete feature]({{ '/_assets/images/screenshot-autocomplete.png' | asset | url }})

### [Signature Help](https://atom.io/packages/atom-ide-signature-help)

A replacement of the signature help functionality from atom-ide-ui. When you're calling a function, it can help you understand the parameters or information about the function you’re calling. [More details](https://github.com/atom-ide-community/atom-ide-signature-help#atom-ide-signature-help)

![screenshot of sig-help feature]({{ '/_assets/images/screenshot-sig-help.png' | asset | url }})

### [Go to Definition](https://atom.io/packages/atom-ide-definitions)

A replacement of the go to definition functionality from atom-ide-ui. [More details](https://github.com/atom-ide-community/atom-ide-definitions#atom-ide-definitions-package)

### Linter / Linter-UI

There is an existing [linter](https://atom.io/packages/linter) and [linter-ui](https://atom.io/packages/linter-ui-default) that is known to work with the existing ide-packages. It can be configured to only show linting errors per file, or for the whole project in its settings.

![screenshot of linter feature]({{ '/_assets/images/screenshot-linter.png' | asset | url }})

### [Outline](https://atom.io/packages/atom-ide-outline)

A replacement of the outline functionality from atom-ide-ui. Presents symbols of an active text editor in a tree view. [More details](https://github.com/atom-ide-community/atom-ide-outline)

![screenshot of outline feature]({{ '/_assets/images/screenshot-outline.png' | asset | url }})

## Roadmap

We have published our current roadmap on [Github](https://github.com/atom-ide-community/atom-ide-community.github.io/issues/3#issue-424527067) for you to check and provide feedback to us.
