import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  fields: DS.attr()
  //fields: DS.hasMany('field')
});
