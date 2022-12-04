/**
 * Resolvers for the GraphQL Query
 */
export default {
  Query: {
    hello: () => "world",
    properties: (_, { city }, { dataSources }) => {
      //using dataSources from the Context object
      return dataSources.simplyRestAPI.getProperties(city);
    },
  },
};
