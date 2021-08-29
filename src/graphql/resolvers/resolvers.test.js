const dummyListings = require('./dummyListing');
const resolvers = require('./resolvers');

describe('resolvers', () => {
  it('should query listings', async () => {
    const res = await resolvers.Query.listings();

    expect(res).toEqual(dummyListings);
  });
})