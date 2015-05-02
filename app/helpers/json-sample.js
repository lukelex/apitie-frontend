import Ember from 'ember';
import fieldSample from 'restinme/helpers/field-sample';
import prettyJson from 'restinme/helpers/pretty-json';

export function jsonSample(field) {
  return prettyJson(fieldSample(field[0]));
}

export default Ember.HTMLBars.makeBoundHelper(jsonSample);
