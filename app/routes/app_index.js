import Ember from 'ember';

export default Ember.Route.extend({
  afterModel: function(app, transition) {
    this.transitionTo('app.builder', app);
  }
});
