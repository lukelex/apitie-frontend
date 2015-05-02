import Ember from 'ember';

export default Ember.View.extend({
  templateName: 'entities/preview',
  classNames: 'table',
  publicFields: function() {
    return this.get('entity').get('fields').filter(function(field) {
      return !field.get('internal');
    });
  }.property('entity.fields'),
  extraPublicFields: function() {
    return this.get('publicFields').length - 5;
  }.property('publicFields'),
  shouldShowMore: function() {
    return this.get('publicFields').length > 5;
  }.property('publicFields')
});
