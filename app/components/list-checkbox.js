import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'input',
  type: 'checkbox',
  attributeBindings: ['type', 'htmlChecked:checked', 'value', 'name', 'disabled'],

  htmlChecked: function() {
    return this.get('checked').indexOf(this.get('value')) !== -1;
  }.property('value', 'checked'),

  change: function() {
    var valuesList = this.get('checked');
    var value = this.get('value');
    var index = valuesList.indexOf(value);

    if (index > -1) {
      valuesList.splice(index, 1);
    } else {
      valuesList.push(value);
    }

    this.set('checked', valuesList);
  },

  _updateElementValue: function() {
    Ember.run.next(this, function() {
      this.$().prop('checked', this.get('htmlChecked'));
    });
  }.observes('htmlChecked')
});
