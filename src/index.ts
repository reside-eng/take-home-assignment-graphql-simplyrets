import * as dotenv from "dotenv";
dotenv.config();

import start from "./start";

/** Main function that inits the server and invoked by the 'start' script */
async function run() {
  const { url } = await start();
  console.log(`🚀 Server listening at: ${url}`);
}

run();
