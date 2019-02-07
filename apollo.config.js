require('dotenv').config();

module.exports = {
  client: {
    name: 'Restaurant Finder',
    includes: ['src/**/*.{ts,tsx,js,jsx}'],
    service: {
      name: 'yelp',
      url: process.env.YELP_API_ENDPOINT,
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_YELP_API_TOKEN}`,
      },
    },
  },
};
