import Ember from 'ember';

export function dolar(value) {
  var formatted = parseFloat(value, 10).toFixed(2);
  return new Ember.Handlebars.SafeString('$' + formatted);
}

export default Ember.HTMLBars.makeBoundHelper(dolar);
