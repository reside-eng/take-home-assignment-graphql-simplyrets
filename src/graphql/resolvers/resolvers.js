const logger = require('../../logger');
const dummyListings = require('./dummyListing');

// TODO: dummy data for now
// get it from api

const resolvers = {
  Query: {
    listings: () => {
      logger.info('Listing');
      return dummyListings;
    }
  }
}

module.exports = resolvers;