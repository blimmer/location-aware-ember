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

    assert.equal($('#title').text(), '¡Hola!');
  });
});

test('has spanish greeting for MX country', function(assert) {
  serverVariables.set('country', 'MX');

  visit('/');

  andThen(function() {

    assert.equal($('#greeting').text(), '¡Hola!');
  });
});

test('has english greeting for US country', function(assert) {
  serverVariables.set('country', 'US');

  visit('/');

  andThen(function() {

    assert.equal($('#title').text(), 'Hello!');
  });
});

test('has english greeting for GB country', function(assert) {
  serverVariables.set('country', 'GB');

  visit('/');

  andThen(function() {

    assert.equal($('#title').text(), 'Hello!');
  });
});
