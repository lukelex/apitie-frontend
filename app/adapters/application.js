import DS from 'ember-data';
import ENV from 'restinme/config/environment';

export default DS.RESTAdapter.reopen({
  host: ENV.apiEndpoint
});
