import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('login');

  this.route('dashboard', { path: '/' });
  this.resource('apis', function() {
    this.route('new');
  });
  this.resource('api', { path: '/apis/:api_id' }, function() {
    this.route('docs', function() {
      this.route('ruby');
      this.route('ios');
      this.route('js');
      this.route('android');
    });
    this.resource('collections', function() {
      this.route('new');
    });
    this.route('data');
    this.route('settings');
  });
});
