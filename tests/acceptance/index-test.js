import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'location-aware-ember/tests/helpers/start-app';

let application, serverVariables;

module('Acceptance | index', {
  beforeEach: function() {
    application = startApp();
    serverVariables = application.__container__.lookup('service:server-variables');
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('has spanish greeting for ES country', function(assert) {
  serverVariables.set('country', 'ES');

  visit('/');

  andThen(function() {

    assert.equal($('#greeting').text(), '¡Hola!');
    assert.equal($('#secondary-greeting').text(), 'Gracias por visitar desde España.');
  });
});

test('has spanish greeting for MX country', function(assert) {
  serverVariables.set('country', 'MX');

  visit('/');

  andThen(function() {

    assert.equal($('#greeting').text(), '¡Hola!');
    assert.equal($('#secondary-greeting').text(), 'Gracias por visitar desde Mexico.');
  });
});

test('has english greeting for US country', function(assert) {
  serverVariables.set('country', 'US');

  visit('/');

  andThen(function() {

    assert.equal($('#greeting').text(), 'Hello!');
    assert.equal($('#secondary-greeting').text(), 'Thank you for visiting from United States.');
  });
});

test('has english greeting for GB country', function(assert) {
  serverVariables.set('country', 'GB');

  visit('/');

  andThen(function() {

    assert.equal($('#greeting').text(), 'Hello!');
    assert.equal($('#secondary-greeting').text(), 'Thank you for visiting from United Kingdom.');
  });
});
