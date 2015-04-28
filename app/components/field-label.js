import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  fieldType: function() {
    if (this.field.get('name') === 'id') {
      return 'fa-database';
    }
    switch (this.field.get('type')) {
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
  }.property('field.type'),
  click: function() {
    this.sendAction('action', 'builder.inspector', this.field);
  }
});
