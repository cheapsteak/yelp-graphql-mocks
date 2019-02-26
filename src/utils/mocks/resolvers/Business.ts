import { IMockFn, MockList } from 'graphql-tools';
import faker from 'faker';
import _ from 'lodash';

const Business: IMockFn = (root, { id }) => ({
  id: () => id || faker.random.uuid(),
  name: () => faker.company.companyName(),
  photos: () => [`${faker.image.food()}/${faker.random.word()}`],
  location: () => ({
    address1: () => faker.address.streetAddress(),
    address2: () => faker.address.secondaryAddress(),
  }),
  coordinates: () => ({
    latitude: () => faker.address.latitude(),
    longitude: () => faker.address.longitude(),
  }),
  rating: () => _.random(1, 10) / 2,
  review_count: () => _.random(1, 200),
  price: () => _.sample(['$', '$$', '$$$', '$$$$']),
});

export default { Business };
