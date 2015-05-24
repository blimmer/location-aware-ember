import Ember from 'ember';
import nameForCountryCode from 'location-aware-ember/utils/name-for-country-code';

export default Ember.Controller.extend({
  serverVariables: Ember.inject.service(),
  countryName: Ember.computed('serverVariables.country', function () {
    return nameForCountryCode(this.get('serverVariables.country'));
  })
});
