const express = require('express');
const { ApolloServer, gql, AuthenticationError } = require('apollo-server-express');
const types = require('./types/index')


const  { simplyRETS } = require("./listingApi")
const simplyRETSApi = new simplyRETS("simplyrets","simplyrets")

const PORT = 4000;

//TODO : externalize 
const userId = 'user1@sideinc.com'
const password = '676cfd34-e706-4cce-87ca-97f947c43bd4'
const BearerToken = `Bearer ${userId}/${password}`

async function startApolloServer() {

  const app = express();

  const typeDefs = gql`
    type Query { properties: [Listing] }
    ${types}
    `;
  
  const resolvers = {
    Query: {
      properties: async (city) => {
        var properties = await simplyRETSApi.GetPropertiesByCity(city)
        return properties
      },
    },
  }

  const server = new ApolloServer({
    typeDefs, 
    resolvers,
    context: ({ req }) => {
      
      const token = req.headers.authorization || '';

      let user = { }
      if (!token != BearerToken) {
       // throw new AuthenticationError('Unauthorized!');
      } else {
        //todo:  process token to retrieve user
      }

      return { 
        req,
        user  
      };
    },
    plugins: [
      {

      }]
  });

  await server.start();

  server.applyMiddleware({ app, path: "/graphql" });

  await new Promise(resolve => app.listen({ port: PORT }, resolve));

  return { server, app };
}

startApolloServer();