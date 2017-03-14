var modularscaleSass = require('./index');

module.exports = function(eyeglass, sass) {
  return {
    sassDir: modularscaleSass.includePaths[0]
  };
};
