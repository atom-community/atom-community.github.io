import { rocketLaunch } from '@rocket/launch';
import { rocketSearch } from '@rocket/search';
import { esbuildPlugin } from '@web/dev-server-esbuild';
import esbuild from 'rollup-plugin-esbuild';

import { addPlugin } from 'plugins-manager';

import markdownIt from 'markdown-it';
import prism from 'markdown-it-prism';
import addWebComponentDefinitions from 'eleventy-plugin-add-web-component-definitions';
import helmet from 'eleventy-plugin-helmet';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  presets: [rocketLaunch(), rocketSearch()],
  markdownTemplateEngine: "njk",
  eleventy(eleventyConfig) {
    eleventyConfig.addPassthroughCopy(`./**/CNAME`);
    eleventyConfig.addPairedShortcode('markdown', function markdown(content) {
      const md = new markdownIt({ html: true });
      md.use(prism);
      return md.render(content);
    });
    eleventyConfig.addFilter('getProperties', x => (x?.children??[]).filter(child => child.kindString === 'Property'));
    eleventyConfig.addFilter('getMethods', x => (x?.children??[]).filter(child => child.kindString === 'Method'));
    eleventyConfig.addFilter('getSummary', x => x?.comment?.tags?.find?.(t => t.tag === 'summary')?.text);
    eleventyConfig.addFilter('json', x => `<json-viewer><script type="application/json">${typeof x === 'string' ? x : JSON.stringify(x)}</script></json-viewer>`);
    eleventyConfig.addPlugin(helmet);
    eleventyConfig.addPlugin(addWebComponentDefinitions, {
      quiet: true,
      singleScript: true,
      specifiers: {
        'type-doc': 'atom-community.github.io/components/type-doc',
        'json-viewer': 'https://unpkg.com/@power-elements/json-viewer@2.1.1/json-viewer.js?module'
      },
    });
  },
  devServer: {
    nodeResolve: {
      exportConditions: ['default', 'esbuild', 'import'],
      extensions: ['.mjs', '.js', '.ts'],
    },
    plugins: [
      esbuildPlugin({ ts: true }),
    ],
  },
  setupBuildPlugins: [
    addPlugin({
      name: 'esbuild-rollup',
      plugin: esbuild,
      options: {
        include: 'components/*.ts',
        sourceMap: true,
        loaders: {
          '.ts': 'ts',
        },
      } }),
  ],

};
