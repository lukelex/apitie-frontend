import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: 'field-label',
  fieldType: function() {
    if (this.model.get('name') === 'id') {
      return 'fa-database';
    }
    switch (this.model.get('type')) {
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
  }.property('model.type'),
  click: function() {
    this.sendAction('action', 'entities.inspector', this.model);
  }
});
