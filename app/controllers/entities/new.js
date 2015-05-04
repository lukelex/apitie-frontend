import Ember from 'ember';

export default Ember.Controller.extend({
  needs: 'app',
  actions: {
    save: function() {
      var newEntity = this.store.createRecord('entity', {
        name: this.get('name'),
        app: this.get('controllers.app').model
      });

      newEntity.save();

      this.set('name', '');

      this.transitionToRoute('entities');
    },
    cancel: function() {
      this.transitionToRoute('entities');
    }
  }
});
