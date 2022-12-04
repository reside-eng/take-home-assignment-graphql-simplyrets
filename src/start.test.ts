// we import a function that we wrote to create a new instance of Apollo Server
import start from "./start";

// we'll use supertest to test our server
import request from "supertest";

// this is the query for our test
const queryData = {
  query: `query sayHello {
    hello
  }`,
};

describe("start", () => {
  let server, url;

  // before the tests we spin up a new Apollo Server
  beforeAll(async () => {
    // We pass in the port as 0 to let the server pick its own ephemeral port for testing
    process.env.PORT = "0";
    ({ server, url } = await start());
  });

  // after the tests we'll stop the server
  afterAll(async () => {
    await server?.stop();
  });

  it("returns and error when not authenticated", async () => {
    const response = await request(url).post("/").send(queryData);
    expect(response.body?.errors?.[0].message).toEqual(
      "User is not authenticated"
    );
  });

  it("returns ok when authenticated", async () => {
    process.env.ADMIN_TOKEN = "test";
    const response = await request(url)
      .post("/")
      .set("Authorization", `Bearer test`)
      .send(queryData);
    expect(response.body?.errors).toBeUndefined();
    expect(response.body?.data?.hello).toEqual("world");
  });
});
