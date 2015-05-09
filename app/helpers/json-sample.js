import Ember from 'ember';
import fieldSample from 'restinme/helpers/field-sample';
import prettyJson from 'restinme/helpers/pretty-json';

export function jsonSample(fields) {
  var node = {};

  fields[0].forEach(function(field) {
    return fieldSample(node, field);
  });

  return prettyJson(node);
}

export default Ember.HTMLBars.makeBoundHelper(jsonSample);
