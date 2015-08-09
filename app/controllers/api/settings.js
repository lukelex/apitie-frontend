import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    changeTier: function() {
      this.model.api.save();
      console.log(this.model.api.get('tier.name'));
    }
  }
});
