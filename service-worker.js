if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return d[e]||(c=new Promise((async c=>{if("document"in self){const d=document.createElement("script");d.src=e,document.head.appendChild(d),d.onload=c}else importScripts(e),c()}))),c.then((()=>{if(!d[e])throw new Error(`Module ${e} didn’t register its module`);return d[e]}))},c=(c,d)=>{Promise.all(c.map(e)).then((e=>d(1===e.length?e[0]:e)))},d={require:Promise.resolve(c)};self.define=(c,i,b)=>{d[c]||(d[c]=Promise.resolve().then((()=>{let d={};const a={uri:location.origin+c.slice(1)};return Promise.all(i.map((c=>{switch(c){case"exports":return d;case"module":return a;default:return e(c)}}))).then((e=>{const c=b(...e);return d.default||(d.default=c),d}))})))}}define("./service-worker.js",["./workbox-b027a59c"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_merged_assets/_static/noscript.css",revision:"1a5e2651bf419b6261b64869ca95af04"},{url:"096b7430.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b743010.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b743011.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b743012.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b743013.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b743014.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b743015.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b743016.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b743017.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b743018.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b743019.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b74302.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b743020.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b743021.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b74303.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b74304.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b74305.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b74306.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b74307.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b74308.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b74309.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"1c3f7bd3.js",revision:"af89c1d7838c59eabfc669c8dd09cd5f"},{url:"2dbe227f.js",revision:"4ad8a630f214a2d1de28ca7c9bc72660"},{url:"404.html",revision:"6b1a1a88d1af2d9d73276286dc883e34"},{url:"490f016e.css",revision:"1753244dada61e9655aa180c07b74687"},{url:"4d30c7b8.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"4d30c7b82.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"4d30c7b83.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"4d30c7b84.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"4d30c7b85.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"4d30c7b86.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"66113fa6.css",revision:"1b0655bc18c6d3c4bfd330f26d0ea6f7"},{url:"674edd8f.css",revision:"ebdaafd5c95bf5c76764e42a327faa27"},{url:"81d5322c.js",revision:"5dd5e89eac2b41c89cfe37a2b438ea9a"},{url:"81d5322c10.js",revision:"5dd5e89eac2b41c89cfe37a2b438ea9a"},{url:"81d5322c11.js",revision:"5dd5e89eac2b41c89cfe37a2b438ea9a"},{url:"81d5322c12.js",revision:"5dd5e89eac2b41c89cfe37a2b438ea9a"},{url:"81d5322c13.js",revision:"5dd5e89eac2b41c89cfe37a2b438ea9a"},{url:"81d5322c14.js",revision:"5dd5e89eac2b41c89cfe37a2b438ea9a"},{url:"81d5322c15.js",revision:"5dd5e89eac2b41c89cfe37a2b438ea9a"},{url:"81d5322c16.js",revision:"5dd5e89eac2b41c89cfe37a2b438ea9a"},{url:"81d5322c17.js",revision:"5dd5e89eac2b41c89cfe37a2b438ea9a"},{url:"81d5322c18.js",revision:"5dd5e89eac2b41c89cfe37a2b438ea9a"},{url:"81d5322c2.js",revision:"5dd5e89eac2b41c89cfe37a2b438ea9a"},{url:"81d5322c3.js",revision:"5dd5e89eac2b41c89cfe37a2b438ea9a"},{url:"81d5322c4.js",revision:"5dd5e89eac2b41c89cfe37a2b438ea9a"},{url:"81d5322c5.js",revision:"5dd5e89eac2b41c89cfe37a2b438ea9a"},{url:"81d5322c6.js",revision:"5dd5e89eac2b41c89cfe37a2b438ea9a"},{url:"81d5322c7.js",revision:"5dd5e89eac2b41c89cfe37a2b438ea9a"},{url:"81d5322c8.js",revision:"5dd5e89eac2b41c89cfe37a2b438ea9a"},{url:"81d5322c9.js",revision:"5dd5e89eac2b41c89cfe37a2b438ea9a"},{url:"94d90def.js",revision:"f2c1c8016f3dab11281ce4c0bf98b439"},{url:"a0513237.css",revision:"a3d8fa08c801b54cf7b24db2c5e670d1"},{url:"a6a27882.js",revision:"08b0f2758ff6d207eb4a756ede11e955"},{url:"api/autocomplete/index.html",revision:"8e9b97196abdd22f81cdf0d58474869e"},{url:"api/busy-signal/index.html",revision:"3b8034ab19bb8771e0e14602804f0054"},{url:"api/code-actions/index.html",revision:"2540e4d19664e9d47b03019cefb17838"},{url:"api/code-format/index.html",revision:"39ccbde22348a2992f982517da9ee36e"},{url:"api/code-highlight/index.html",revision:"f64a25a585c6845af7503ab15328bc17"},{url:"api/console/index.html",revision:"89aa3ea1c1aeab55bb886e282c572a48"},{url:"api/datatip/index.html",revision:"a5bbe0e852c06e57b207c486d509297f"},{url:"api/definitions/index.html",revision:"146292b70de780fb384ff269c09f0864"},{url:"api/find-references/index.html",revision:"27e552b98ac508e792df8f95ed7e83b0"},{url:"api/hyperclick/index.html",revision:"8c7688cd6899a376264f30ceb69a32e3"},{url:"api/index.html",revision:"dc2d05ebcc5a9533deef5eae1b2cb18d"},{url:"api/linter/index.html",revision:"29fd6a3526c189d5ef15da7007882d50"},{url:"api/main/index.html",revision:"65f0f178eae0ba43bf0df5e8f0d37dff"},{url:"api/markdown-service/index.html",revision:"37dea0206d654faf7ba57015c9dd3193"},{url:"api/outline/index.html",revision:"ff946e42cdfbe6ec61c4c6668626f1aa"},{url:"api/refactor/index.html",revision:"0aec34305a57e67e263fe8eb9ea6e45f"},{url:"api/sig-help/index.html",revision:"2641945d321cbf11d70b763849f9a12c"},{url:"api/text-edit/index.html",revision:"6a401b505cc81fc9bcdd42eb183c38ec"},{url:"api/uri/index.html",revision:"182f743c56acaa634a21ec52809fa47b"},{url:"b8c01bc2.css",revision:"93ea8bd0b5fbfa74d10ceb56c127a465"},{url:"b969ee61.js",revision:"5bb9786c40151c07d77b6d34a67507f7"},{url:"b969ee6110.js",revision:"5bb9786c40151c07d77b6d34a67507f7"},{url:"b969ee6111.js",revision:"5bb9786c40151c07d77b6d34a67507f7"},{url:"b969ee6112.js",revision:"5bb9786c40151c07d77b6d34a67507f7"},{url:"b969ee6113.js",revision:"5bb9786c40151c07d77b6d34a67507f7"},{url:"b969ee6114.js",revision:"5bb9786c40151c07d77b6d34a67507f7"},{url:"b969ee6115.js",revision:"5bb9786c40151c07d77b6d34a67507f7"},{url:"b969ee612.js",revision:"5bb9786c40151c07d77b6d34a67507f7"},{url:"b969ee613.js",revision:"5bb9786c40151c07d77b6d34a67507f7"},{url:"b969ee614.js",revision:"5bb9786c40151c07d77b6d34a67507f7"},{url:"b969ee615.js",revision:"5bb9786c40151c07d77b6d34a67507f7"},{url:"b969ee616.js",revision:"5bb9786c40151c07d77b6d34a67507f7"},{url:"b969ee617.js",revision:"5bb9786c40151c07d77b6d34a67507f7"},{url:"b969ee618.js",revision:"5bb9786c40151c07d77b6d34a67507f7"},{url:"b969ee619.js",revision:"5bb9786c40151c07d77b6d34a67507f7"},{url:"e59f684c.js",revision:"d0252bc9ee6491007a7e1a8674a01d71"},{url:"e7b4610e.js",revision:"61bc7858c7cd90afd81b5eedb69d4e5c"},{url:"e7b4610e10.js",revision:"61bc7858c7cd90afd81b5eedb69d4e5c"},{url:"e7b4610e11.js",revision:"61bc7858c7cd90afd81b5eedb69d4e5c"},{url:"e7b4610e12.js",revision:"61bc7858c7cd90afd81b5eedb69d4e5c"},{url:"e7b4610e13.js",revision:"61bc7858c7cd90afd81b5eedb69d4e5c"},{url:"e7b4610e14.js",revision:"61bc7858c7cd90afd81b5eedb69d4e5c"},{url:"e7b4610e15.js",revision:"61bc7858c7cd90afd81b5eedb69d4e5c"},{url:"e7b4610e16.js",revision:"61bc7858c7cd90afd81b5eedb69d4e5c"},{url:"e7b4610e17.js",revision:"61bc7858c7cd90afd81b5eedb69d4e5c"},{url:"e7b4610e18.js",revision:"61bc7858c7cd90afd81b5eedb69d4e5c"},{url:"e7b4610e19.js",revision:"61bc7858c7cd90afd81b5eedb69d4e5c"},{url:"e7b4610e2.js",revision:"61bc7858c7cd90afd81b5eedb69d4e5c"},{url:"e7b4610e20.js",revision:"61bc7858c7cd90afd81b5eedb69d4e5c"},{url:"e7b4610e21.js",revision:"61bc7858c7cd90afd81b5eedb69d4e5c"},{url:"e7b4610e3.js",revision:"61bc7858c7cd90afd81b5eedb69d4e5c"},{url:"e7b4610e4.js",revision:"61bc7858c7cd90afd81b5eedb69d4e5c"},{url:"e7b4610e5.js",revision:"61bc7858c7cd90afd81b5eedb69d4e5c"},{url:"e7b4610e6.js",revision:"61bc7858c7cd90afd81b5eedb69d4e5c"},{url:"e7b4610e7.js",revision:"61bc7858c7cd90afd81b5eedb69d4e5c"},{url:"e7b4610e8.js",revision:"61bc7858c7cd90afd81b5eedb69d4e5c"},{url:"e7b4610e9.js",revision:"61bc7858c7cd90afd81b5eedb69d4e5c"},{url:"ec1e2d4e.js",revision:"3c43baa614ba8cd35e7223e4cd59bf5e"},{url:"ee401ad0.css",revision:"ccd2ebf5e605f3732ca3e83962c1c0f5"},{url:"getting-started/index.html",revision:"1f7ae7b596bd0f277fe8a396a43cf36e"},{url:"index.html",revision:"1245a5aa3a40a8b3e08378a1dc9d18d5"},{url:"_merged_assets/_static/rocket-search-index.json",revision:"2739fec010ea86ef02540b508a57315f"}],{}),e.registerRoute("polyfills/*.js",new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
