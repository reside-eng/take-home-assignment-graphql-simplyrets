Please read the PLEASE_READ_FIRST.md first.

Please document your code & design decisions here.

## Design and code decisions

1. I switched to Typescript to have a more predictable code, easier to maintain, with better tools for coding and making it less error prone. It's a bit more verbose when adding types and interfaces, it takes some time to get set up correctly, but I think it's worth it considering all the pros mentioned here.
2. The tests files are included along with the implementation files. This approach gives better visibility into what is covered and not by tests, it also  avoids having to replicate the same folder structure when using a separate folder for tests.
3. Code files are organized in a single `src` folder, separating what is related to config, dependencies and build tools for a better isolation and organization
4. The API and resolver for the properties query have their implementation mocked. I considered using nocks to store the requests when needed, that would be a improvement and it would bring a more in-depth coverage of the requests functionality, in my opinion. The idea is to use env flags and scripts from the package.json to control when to store or update the nocks, and having automatic interception of any external requests. That would require more time to set up, but definetly would be something that could save up time for further tests.
5. Using snapshots for some tests. Snapshots can save a lot of time specially for tests designed to determine if the output content and format are as expected
6. Using `dotenv` to store the all the credentials and basic configs into a single place
7. All the GraphQL types are now included into the `schema.grapqhl` that is used to set up the server and also to generate the TS types
8. Using codegen to generate the GraphQL types into TS types and be able to use and reference them in the app
9. This is not mentioned in the requirements, so I assumed here that the city is a required argument for the properties resolver. Makes sense to me return an error if the city is not informed, also considered returning an empty array, but the first clearly indicates that the param is necessary. This prevents from having big payloads returning all the properties data from the Simple Rets API.
10. Bumped to Apollo v4 to have its latest features
11. Prettier and Tslint were added to keep code aligned in terms of styling and best practices
12. Some scripts were added to help coding, mentioned below

## Scripts

- `compile` - compile the code into the dist folder
- `dev` - start the server in dev mode, watching and reloading after code changes
- `format` - code format the src folder using prettier 
- `lint` - runs the tslint
- `generate` - generate Typescript types from GraphQL types
- `test` - test all files
- `test:update` - test all files and update snapshots
- `test:watch` - test and watch for changes - for dev
- `start` - compile and start the server
- `start:server` - start the server

## Env variables

The code is using `dotenv` so it requires a .env file in the root folder with the following variables (as mentioned in the [PLEASE_READ_FIRST.md](PLEASE_READ_FIRST.md)). 

```
SIMPLY_RETS_USERNAME=simplyrets
SIMPLY_RETS_PWD=simplyrets
ADMIN_TOKEN=676cfd34-e706-4cce-87ca-97f947c43bd4
PORT=4000
```
