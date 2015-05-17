import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      api: this.modelFor('api'),
      tiers: this.store.findAll('tier')
    });
  }
});
