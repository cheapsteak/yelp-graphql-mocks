import { MockList } from 'graphql-tools';
import _ from 'lodash';

export default {
  ...require('./Business').default,
  Businesses: () => ({
    business: () => new MockList([10, 20]),
  }),
};
