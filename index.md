---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

The original objective of the Facebook [Nuclide](https://nuclide.io) / [Atom-IDE](https://ide.atom.io) project has been to provide extension packages for the [Atom Editor](https://www.atom.io) to interact with custom Language Servers via the [Language Server Protocol](https://langserver.org) to enable IDE like functionality in our beloved editor.

The original package was made of various "subpackages" that provide the overall functionality and were always build and released in a monolithic extension (aka atom-ide-ui).

The objective of this project is to take over the concepts and ideas in the original atom-ide-ui package, but provide individual extensions that can be developed, released and installed independently.

We will start with the most important features, and iterate on them quickly to come on par with the functionality available in the atom-ide-ui package.   

Data Tip Provider
![](./assets/images/screenshot-datatip.png){:width="100%"}
