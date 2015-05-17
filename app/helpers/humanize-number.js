import Ember from 'ember';

export function humanizeNumber(number) {
  var formattedNumber = number.toString();

  while(formattedNumber.match(/0{3}($|k)/g)) {
    formattedNumber = formattedNumber.replace(/(0{3})k?$/g, 'k');
  }

  return formattedNumber;
}

export default Ember.HTMLBars.makeBoundHelper(humanizeNumber);
