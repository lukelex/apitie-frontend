import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    this.controllerFor('collections.new').set('model', this.model);
    return this.render('collections.new', {
      into: 'api',
      outlet: 'modal'
    });
  }
});
