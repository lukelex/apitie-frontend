import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  type: DS.attr('string'),
  validates: DS.attr(),
  internal: DS.attr('boolean'),
  entity: DS.belongsTo('entity')
});
