import { ApolloServer } from "@apollo/server";
import { readFileSync } from "fs";

import resolvers from "./resolvers";
import dataSources from "./dataSources";
import mockProperties from "./mocks/properties.json";

jest.mock("./datasources/simplyRestAPI", () => ({
  getProperties: jest
    .fn()
    .mockImplementation(() => Promise.resolve(mockProperties)),
}));

const typeDefs = readFileSync("./schema.graphql").toString("utf-8");

const executeQuery = (query) => {
  const testServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  return testServer.executeOperation(
    {
      query,
    },
    {
      contextValue: {
        dataSources,
      },
    }
  );
};

describe("resolvers", () => {
  it("returns hello with the provided name", async () => {
    const response = await executeQuery("query SayHelloWorld { hello }");
    //@ts-ignore missing type in GraphQLResponse
    expect(response.body?.singleResult?.data).toMatchSnapshot();
  });

  it("correctly returns a list of properties", async () => {
    const response = await executeQuery(
      `
      query ExampleQuery {
        properties(city:"houston"){
          accessibility
          acres
          additionalRooms
          area
          areaSource
          bathrooms
          bathsFull
          bathsHalf
          bathsThreeQuarter
          bedrooms
          construction
          cooling
          exteriorFeatures
          fireplaces
          flooring
          foundation
          garageSpaces
          heating
          interiorFeatures
          laundryFeatures
          lotDescription
          lotSize
          lotSizeArea
          lotSizeAreaUnits
          maintenanceExpense
          occupantName
          occupantType
          ownerName
          parking {
            description
          }
          pool
          roof
          stories
          style
          subType
          subTypeText
          subdivision
          type
          view
          water
          yearBuilt
        }
      }
      `
    );
    //@ts-ignore missing type in GraphQLResponse
    expect(response.body?.singleResult?.data).toMatchSnapshot();
  });

  it("should return an error if no city is informed", async () => {
    const response = await executeQuery(`
    query NoCity {
      properties {
        acres
      }
    }
  `);
    //@ts-ignore missing type in GraphQLResponse
    expect(response.body?.singleResult?.errors?.[0]).toBeDefined();
  });
});
