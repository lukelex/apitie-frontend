import Ember from 'ember';

export default Ember.Controller.extend({
  isEditingName: false,
  actions: {
    editName: function() {
      this.set('isEditingName', true);
    },
    close: function() {
      this.set('isEditingName', false);
      this.send('closeModal');
    },
    deleteField: function() {
      this.model.rollback();
      this.send('close');

      this.model.destroyRecord();
    },
    cancel: function() {
      this.model.rollback();
      this.send('close');
    },
    saveField: function() {
      this.send('close');

      this.get('model').save();
    }
  }
});
