import { restaurantsQuery } from './SearchResults';

export default {
  request: {
    query: restaurantsQuery,
    variables: {
      categories: 'restaurant',
      location: '25 York Street, Toronto, ontario, canada',
      radius: 400,
      sortBy: 'rating_value',
    },
  },
  result: {
    data: {
      search: {
        business: [
          {
            id: 'JMiaNitMzMbJm6Kh0RbT5A',
            name: 'Canoe',
            photos: [
              'https://s3-media1.fl.yelpcdn.com/bphoto/1aXq2ObQBBN8oxnhAsGihg/o.jpg',
            ],
            review_count: 639,
            rating: 4.0,
            price: '$$$$',
            categories: [{ title: 'Canadian (New)', __typename: 'Category' }],
            __typename: 'Business',
            coordinates: {
              latitude: 43.646954,
              longitude: -79.382159,
              __typename: 'Coordinates',
            },
          },
          {
            id: 'Qa4eXuZ1IFPwnVXJcpZWtw',
            name: 'Real Sports Bar & Grill',
            photos: [
              'https://s3-media1.fl.yelpcdn.com/bphoto/sgOLhhKnlxymZuiP0B-TUw/o.jpg',
            ],
            review_count: 431,
            rating: 3.5,
            price: '$$',
            categories: [
              { title: 'Sports Bars', __typename: 'Category' },
              { title: 'Canadian (New)', __typename: 'Category' },
            ],
            __typename: 'Business',
            coordinates: {
              latitude: 43.6426783333524,
              longitude: -79.3800445915144,
              __typename: 'Coordinates',
            },
          },
          {
            id: '4POPYEONJpkfhWOMx_PyGg',
            name: 'Harbour 60',
            photos: [
              'https://s3-media4.fl.yelpcdn.com/bphoto/lGxoBZa-dv-9GZ0OmOrC4A/o.jpg',
            ],
            review_count: 213,
            rating: 4.0,
            price: '$$$$',
            categories: [
              { title: 'Steakhouses', __typename: 'Category' },
              { title: 'Seafood', __typename: 'Category' },
            ],
            __typename: 'Business',
            coordinates: {
              latitude: 43.642079,
              longitude: -79.3784532,
              __typename: 'Coordinates',
            },
          },
          {
            id: 'D1lAVtlav4atQTJnIvtcpw',
            name: 'Taverna Mercatto',
            photos: [
              'https://s3-media1.fl.yelpcdn.com/bphoto/wIFbegifMRUfj3XxjVgysA/o.jpg',
            ],
            review_count: 153,
            rating: 3.5,
            price: '$$',
            categories: [{ title: 'Italian', __typename: 'Category' }],
            __typename: 'Business',
            coordinates: {
              latitude: 43.6426722096442,
              longitude: -79.3827601467308,
              __typename: 'Coordinates',
            },
          },
          {
            id: '1QwX7Cgkm6KnlcGNDTh6EQ',
            name: 'E11even',
            photos: [
              'https://s3-media1.fl.yelpcdn.com/bphoto/KCTNJuUA0WQTpU_FDMc3jA/o.jpg',
            ],
            review_count: 146,
            rating: 3.5,
            price: '$$$',
            categories: [
              { title: 'Seafood', __typename: 'Category' },
              { title: 'Steakhouses', __typename: 'Category' },
              { title: 'Canadian (New)', __typename: 'Category' },
            ],
            __typename: 'Business',
            coordinates: {
              latitude: 43.642801069778,
              longitude: -79.381241442969,
              __typename: 'Coordinates',
            },
          },
          {
            id: '4MQaqhBUJCpghGukSWNq7w',
            name: 'The Loose Moose',
            photos: [
              'https://s3-media3.fl.yelpcdn.com/bphoto/w7g-goS2ynkuI8lji3lpIw/o.jpg',
            ],
            review_count: 346,
            rating: 3.5,
            price: '$$',
            categories: [
              { title: 'Sports Bars', __typename: 'Category' },
              { title: 'Gastropubs', __typename: 'Category' },
              { title: 'Canadian (New)', __typename: 'Category' },
            ],
            __typename: 'Business',
            coordinates: {
              latitude: 43.64522,
              longitude: -79.38385,
              __typename: 'Coordinates',
            },
          },
        ],
      },
    },
  },
};
