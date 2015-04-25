import DS from 'ember-data';

export default DS.RESTAdapter.reopen({
  host: 'http://dev.rest-in.me:9292'
});
