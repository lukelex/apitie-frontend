import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  fieldType: function() {
    switch (this.get('type')) {
      case 'text':
        return 'fa-font';
      case 'number':
        return 'fa-calculator';
      case 'datetime':
        return 'fa-calendar';
      case 'file':
        return 'fa-file';
      default:
        return 'fa-question';
    }
  }.property('type')
});
