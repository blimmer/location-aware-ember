import Ember from 'ember';
import languageForCountryCode from 'location-aware-ember/utils/language-for-country-code';

export default Ember.Route.extend({
  i18n:            Ember.inject.service(),
  serverVariables: Ember.inject.service(),

  countryCode: Ember.computed.reads('serverVariables.country'),

  beforeModel: function () {
    this.set('i18n.locale', languageForCountryCode(this.get('countryCode')));
  }
});
