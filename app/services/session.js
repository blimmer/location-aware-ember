import Ember from 'ember';

export default Ember.Service.extend({
  serverVariables: Ember.inject.service(),

  countryCode: 'US',

  forceInitialization: function () {
    const country = this.get('serverVariables.country');
    if (country) {
      this.set('countryCode', country);
    }
  }
});
