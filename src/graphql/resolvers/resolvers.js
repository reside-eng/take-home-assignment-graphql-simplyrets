const logger = require('../../logger');
const { listings } = require('../../dto');

const resolvers = {
  Query: {
    listings: async () => {
      logger.info('Listing');
      const data = await listings.getListings();
      return data;
    }
  }
}

module.exports = resolvers;