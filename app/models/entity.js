import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  fields: DS.hasMany('field'),
  app: DS.belongsTo('app')
});
