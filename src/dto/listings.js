const logger = require('../logger');
const api = require('../api');

const makeListings = properties => {
  // TODO: check data integrity and also convert to our listings object if 
  // field is not matched???
   return properties;
}

const listings = {

  // getListings get properties list from api 
  // and convert it to our listings object
  getListings: async () => {
    logger.info('getListings');
    const data = await api.getProperties();
    return makeListings(data);
  },
};

module.exports = listings;