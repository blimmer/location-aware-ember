import Ember from 'ember';
import languageForCountryCode from 'location-aware-ember/utils/language-for-country-code';

export default Ember.Route.extend({
  i18n:    Ember.inject.service(),
  session: Ember.inject.service(),

  beforeModel: function (transition) {
    transition.send('setLanguage', languageForCountryCode(this.get('session.countryCode')));
  },

  actions: {
    setLanguage: function (locale) {
      this.set('i18n.locale', locale);
    }
  }
});
