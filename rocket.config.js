import { rocketLaunch } from '@rocket/launch';
import { rocketSearch } from '@rocket/search';
import { esbuildPlugin } from '@web/dev-server-esbuild';
import esbuild from 'rollup-plugin-esbuild';

import { addPlugin } from 'plugins-manager';

import markdownIt from 'markdown-it';
import prism from 'markdown-it-prism';
import addWebComponentDefinitions from 'eleventy-plugin-add-web-component-definitions';
import helmet from 'eleventy-plugin-helmet';

export default {
  presets: [rocketLaunch(), rocketSearch()],
  markdownTemplateEngine: "njk",
  eleventy(eleventyConfig) {
    eleventyConfig.addPairedShortcode('markdown', function markdown(content) {
      const md = new markdownIt({ html: true });
      md.use(prism);
      return md.render(content);
    });
    eleventyConfig.addFilter('getProperties', (type) => type.children.filter(child => child.kindString === 'Property'))
    eleventyConfig.addFilter('getMethods', (type) => type.children.filter(child => child.kindString === 'Method'))
    eleventyConfig.addPlugin(helmet);
    eleventyConfig.addPlugin(addWebComponentDefinitions, {
      quiet: true,
      singleScript: true,
      specifiers: {
        'type-doc': 'atom-community.github.io/components/type-doc',
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
