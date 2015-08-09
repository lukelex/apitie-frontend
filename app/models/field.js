import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  type: DS.attr('string'),
  validations: DS.attr('', { defaultValue: [] }),
  internal: DS.attr('boolean', { defaultValue: false }),
  collection: DS.belongsTo('collection')
});
