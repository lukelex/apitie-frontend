import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('dashboard', { path: '/' });
  this.resource('app', { path: '/apps/:app_id' }, function() {
    this.route('info', { path: '/' });
    this.route('docs');
    this.resource('entities', function() {
      this.route('new');
    });
    this.route('data');
    this.route('settings');
  });
});
