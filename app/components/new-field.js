import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'i',
  classNames: 'new-field fa fa-plus',
  click: function() {
    var field = this.get('targetObject.store').createRecord('field', {
      collection: this.collection
    });
    this.sendAction('action', 'collections.inspector', field);
  }
});
