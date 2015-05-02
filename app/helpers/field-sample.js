export default function fieldSample(field) {
  var node = {}, sample;
  var fieldName = field.get('name');
  var fieldType = field.get('type');

  if (fieldName.indexOf('email') > -1) {
    sample = 'me@example.com';
  } else if (fieldName.indexOf('name') > -1) {
    sample = 'John doe';
  } else if (fieldName.indexOf('id') > -1) {
    sample = Math.floor((Math.random() * 1000) + 1);
  } else if (fieldName.indexOf('number') > -1 || fieldType === 'number') {
    sample = Math.floor((Math.random() * 100) + 1);
  } else if (fieldName.match(/_at$/)) {
    var from = new Date(1900, 0, 1).getTime();
    var to = new Date(2100, 0, 1).getTime();
    sample = new Date(from + Math.random() * (to - from));
  } else if (fieldName.match(/_?url$/)) {
    sample = 'http://example.com/resource_url'
  } else if (fieldType === 'text') {
    sample = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...';
  } else {
    sample = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...';
  }

  node[field.get('name')] = sample;

  return node;
}
