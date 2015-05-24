import languageForCountryCode from '../../../utils/language-for-country-code';
import { module, test } from 'qunit';

module('Unit | Utility | language for country code');

test('it recognizes United States (US)', function(assert) {
  var result = languageForCountryCode('US');
  assert.equal(result, 'en');
});

test('it recognizes Great Britain (GB)', function(assert) {
  var result = languageForCountryCode('GB');
  assert.equal(result, 'en');
});

test('it recognizes Spain (ES)', function(assert) {
  var result = languageForCountryCode('ES');
  assert.equal(result, 'es');
});

test('it recognizes Mexico (MX)', function(assert) {
  var result = languageForCountryCode('MX');
  assert.equal(result, 'es');
});

test('it falls back to english if unknown', function(assert) {
  var result = languageForCountryCode('zh');
  assert.equal(result, 'en');
});
