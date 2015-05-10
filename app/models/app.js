import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  public_key: DS.attr('string'),
  private_key: DS.attr('string'),
  entities: DS.hasMany('entity', { async: true }),
  tier: DS.belongsTo('tier', { async: true })
});
