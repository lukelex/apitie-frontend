import Ember from 'ember';

export default Ember.Controller.extend({
  reopen: function() {
    console.log(this.model.get('isNew'))
    return this.model.get('isNew');
  },
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
