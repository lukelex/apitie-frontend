import Ember from 'ember';

export default Ember.Controller.extend({
  needs: 'api',
  actions: {
    save: function() {
      var newEntity = this.store.createRecord('entity', {
        name: this.get('name'),
        api: this.get('controllers.api').model
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
