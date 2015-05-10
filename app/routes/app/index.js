import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var app = this.modelFor('app');
    return Ember.RSVP.hash({
      app: app,
      statistic: this.store.find('statistic', app.id)
    });
  }
});
