import RESTSerializer from '@ember-data/serializer/rest';
import { underscore } from '@ember/string';

export default RESTSerializer.extend({
  keyForAttribute(attr) {
    return underscore(attr).toUpperCase();
  }
});
