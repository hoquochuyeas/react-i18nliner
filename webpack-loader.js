const I18nliner = require('i18nliner').default;
const hasTranslatableText = require('react-i18nliner/hasTranslatableText')(I18nliner.config);
const preprocess = require('react-i18nliner/preprocess');

module.exports = function i18nloader(source) {
  this.cacheable();

  if (hasTranslatableText(source)) {
    return preprocess(source, I18nliner.config);
  }
  return source;
};
