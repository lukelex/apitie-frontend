import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('api').get('entities');
  },
  actions: {
    openModal: function(modalName, model) {
      this.controllerFor(modalName).set('model', model);
      return this.render(modalName, {
        into: 'api',
        outlet: 'modal'
      });
    },
    closeModal: function() {
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'api'
      });
    }
  }
});
