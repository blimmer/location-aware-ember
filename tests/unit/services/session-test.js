import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

moduleFor('service:session', 'Unit | Service | session', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

test('force initialization sets country code if it exists', function(assert) {
  var fakeServerVarsService = Ember.Object.create({country: 'MX'});

  var service = this.subject({
    serverVariables: fakeServerVarsService
  });

  service.forceInitialization();
  assert.equal(service.get('countryCode'), 'MX');
});

test('force initialization does not set country code it it doesn\'t exist (stays default)', function(assert) {
  var service = this.subject();
  service.forceInitialization();
  assert.equal(service.get('countryCode'), 'US');
});
