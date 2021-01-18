const API_REFLECTION = require('./api.json');

module.exports = async function() {
  const packages = API_REFLECTION.children.reduce((acc, child) => {
    const [{fileName}] = child.sources;
    const [, package] = fileName.match(/^node_modules\/atom-ide-base\/types-packages\/(.*)\.d\.ts$/)
    return {
      ...acc,
      [package]: [...acc[package] ?? [], child],
    }
  }, {});

  return packages;
};
