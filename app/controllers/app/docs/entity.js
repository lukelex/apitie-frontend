import Ember from 'ember';

export default Ember.Controller.extend({
  publicFields: function() {
    return this.model.get('fields').filter(function(field) {
      return !field.get('internal');
    });
  }.property()
});
