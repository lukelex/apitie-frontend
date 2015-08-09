import Ember from 'ember';

export default Ember.View.extend({
  templateName: 'collections/preview',
  classNames: 'table',
  publicFields: function() {
    return this.get('collection').get('fields').filter(function(field) {
      return !field.get('internal');
    });
  }.property('collection.fields'),
  extraPublicFields: function() {
    return this.get('publicFields').length - 5;
  }.property('publicFields'),
  shouldShowMore: function() {
    return this.get('publicFields').length > 5;
  }.property('publicFields')
});
