import Inflector from 'ember-inflector';
export function initialize(/* application */) {
  const inflector = Inflector.inflector;

  inflector.irregular('signups', 'signup');
  inflector.uncountable('advice');
}

export default {
  name: 'custom-inflector-rules',
  initialize
};
