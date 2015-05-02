import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteField: function() {
      this.model.rollback();
      this.send('closeModal');

      this.model.destroyRecord();
    },
    cancel: function() {
      this.model.rollback();
      this.send('closeModal');
    },
    saveField: function() {
      this.send('closeModal');

      this.get('model').save();
    }
  }
});
