import "dotenv/config";
import start from "./start";

/** Main function that initializes the server and is invoked by the 'start' script from package.json */
async function run() {
  const { url } = await start();
  console.log(`🚀 Server listening at: ${url}`);
}

run();
