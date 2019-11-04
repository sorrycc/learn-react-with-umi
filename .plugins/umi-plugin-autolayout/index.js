
module.exports = (api) => {
  api.addRuntimePlugin(require.resolve('./lib/runtime'));
}
