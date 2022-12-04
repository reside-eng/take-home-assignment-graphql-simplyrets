import { ApolloServer } from "@apollo/server";
import { readFileSync } from "fs";
import { startStandaloneServer } from "@apollo/server/standalone";
import { GraphQLError } from "graphql";
import { IncomingMessage } from "http";

import resolvers from "./resolvers";
import dataSources from "./datasources";
import { Context } from "./types";

const typeDefs = readFileSync("./schema.graphql").toString("utf-8");

//mocked authentication logic
function getAuthenticatedUser(req: IncomingMessage) {
  const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");
  if (!token) return null;
  if (token === process.env.ADMIN_TOKEN) {
    return {
      email: "user1@sideinc.com", //mocked user
    };
  }
  return null;
}

/**
 * Starts the server
 * Exposing the start function to be able to test the init server logic
 */
export default async function start() {
  const server = new ApolloServer<Context>({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: {
      port: process.env.PORT ? Number(process.env.PORT) : 4000,
    },

    context: async ({ req }) => {
      //mocked authentication logic
      const user = getAuthenticatedUser(req);

      //if there's no authenticated user returns an error
      if (!user)
        throw new GraphQLError("User is not authenticated", {
          extensions: {
            code: "UNAUTHENTICATED",
            http: { status: 401 },
          },
        });

      return { user, dataSources };
    },
  });
  return { server, url };
}
