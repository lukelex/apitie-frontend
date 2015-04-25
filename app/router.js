import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('dashboard');
  this.resource('app', { path: '/apps/:app_id' }, function() {
    this.route('builder');
    this.route('docs');
    this.route('data');
    this.route('settings');
  });
});
