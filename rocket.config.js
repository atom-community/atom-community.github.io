import { rocketLaunch } from '@rocket/launch';
import { rocketSearch } from '@rocket/search';
import { esbuildPlugin } from '@web/dev-server-esbuild';
import esbuild from 'rollup-plugin-esbuild';

import { addPlugin } from 'plugins-manager';

import markdownIt from 'markdown-it';
import prism from 'markdown-it-prism';

export default {
  presets: [rocketLaunch(), rocketSearch()],
  markdownTemplateEngine: "njk",
  eleventy(eleventyConfig) {
    eleventyConfig.addPairedShortcode('markdown', function markdown(content) {
      const md = new markdownIt({ html: true });
      md.use(prism);
      return md.render(content);
    });
  },
  devServer: {
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
