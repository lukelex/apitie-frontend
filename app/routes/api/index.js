import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var api = this.modelFor('api');
    return Ember.RSVP.hash({
      api: api,
      statistics: this.store.find('statistic', api.id)
    });
  }
});
