import nameForCountryCode from '../../../utils/name-for-country-code';
import { module, test } from 'qunit';

module('Unit | Utility | name for country code');

test('it recognizes United States (US)', function(assert) {
  var result = nameForCountryCode('US');
  assert.equal(result, 'United States');
});

test('it recognizes United Kingdom (GB)', function(assert) {
  var result = nameForCountryCode('GB');
  assert.equal(result, 'United Kingdom');
});

test('it recognizes Spain (ES)', function(assert) {
  var result = nameForCountryCode('ES');
  assert.equal(result, 'España');
});

test('it falls back to code if unknown', function(assert) {
  var result = nameForCountryCode('zh');
  assert.equal(result, 'zh');
});
