import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    this.controllerFor('entities.new').set('model', this.model);
    return this.render('entities.new', {
      into: 'app',
      outlet: 'modal'
    });
  }
});
