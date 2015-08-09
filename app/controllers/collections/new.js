import Ember from 'ember';

export default Ember.Controller.extend({
  needs: 'api',
  actions: {
    save: function() {
      var newCollection = this.store.createRecord('collection', {
        name: this.get('name'),
        api: this.get('controllers.api').model
      });

      newCollection.save();

      this.set('name', '');

      this.transitionToRoute('collections');
    },
    cancel: function() {
      this.transitionToRoute('collections');
    }
  }
});
