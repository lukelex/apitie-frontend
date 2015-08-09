import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      this.transitionToRoute('collections', this.model.save());
    }
  }
});
