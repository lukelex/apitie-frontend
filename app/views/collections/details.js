import Ember from 'ember';

export default Ember.View.extend({
  templateName: 'collections/details',
  tagName: 'aside',
  open: false,
  active: false,
  classNameBindings: ['open', 'active'],
  click: function() {
    this.set('open', true);
    this.set('active', true);
  },
  actions: {
    toggleCollectionOpen: function() {
      this.set('open', !this.get('open'));
    },
    toggleInspector: function(field) {
      alert(field);
    }
  },
});
