import Ember from 'ember';

export default Ember.View.extend({
  templateName: 'builder/preview-entity',
  classNames: 'table',
  hasLotsOfFields: function() {
    alert(1);
    return this.get('fields').length > 1;
  }.property('fields')
});
