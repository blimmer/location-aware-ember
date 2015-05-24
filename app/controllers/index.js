import Ember from 'ember';
import nameForCountryCode from 'location-aware-ember/utils/name-for-country-code';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  countryName: Ember.computed('session.countryCode', function () {
    return nameForCountryCode(this.get('session.countryCode'));
  })
});
