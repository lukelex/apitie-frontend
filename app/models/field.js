import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  type: DS.attr('string'),
  validates: DS.attr(),
  entity: DS.belongsTo('entity')
});
