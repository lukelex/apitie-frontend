import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('login');

  this.route('dashboard', { path: '/' });
  this.route('new_app', { path: '/apps/new' });
  this.resource('app', { path: '/apps/:app_id' }, function() {
    this.route('docs', function() {
      this.route('ruby');
      this.route('ios');
      this.route('js');
      this.route('android');
    });
    this.resource('entities', function() {
      this.route('new');
    });
    this.route('data');
    this.route('settings');
  });
  this.route('new-app');
});
