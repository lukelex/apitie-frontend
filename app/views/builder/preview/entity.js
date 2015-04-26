import Ember from 'ember';

export default Ember.View.extend({
  templateName: 'builder/preview/entity',
  classNames: 'table',
  click: function(evt) {
    this.get('controller').send('inspectEntity', this.get('name'));
  }
});
