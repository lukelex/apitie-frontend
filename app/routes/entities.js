import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var app = this.modelFor('app');
    return app.get('entities');
  },
  actions: {
    openModal: function(modalName, model) {
      this.controllerFor(modalName).set('model', model);
      return this.render(modalName, {
        into: 'app',
        outlet: 'modal'
      });
    },
    closeModal: function() {
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'app'
      });
    }
  }
});
