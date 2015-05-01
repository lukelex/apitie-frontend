import Ember from 'ember';

export default Ember.Controller.extend({
  isEditingName: false,
  actions: {
    editName: function() {
      this.set('isEditingName', true);
    },
    deleteField: function() {
      this.model.rollback();
      this.set('isEditing', false);
      this.send('closeModal');
    },
    cancel: function() {
      this.model.rollback();
      this.send('closeModal');
      this.set('isEditing', false);
    },
    saveField: function() {
      this.send('closeModal');
      this.set('isEditing', false);

      this.get('model').save();
    }
  }
});
