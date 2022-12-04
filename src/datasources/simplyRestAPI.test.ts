import simpleRestApi from "./simplyRestAPI";
import mockProperties from "../mocks/properties.json";

describe("simpleRestApi", () => {
  it("returns an empty array when no city param is informed", async () => {
    expect(await simpleRestApi.getProperties(undefined)).toMatchObject([]);
  });

  it("should return a list of properties", async () => {
    jest
      .spyOn(simpleRestApi, "getProperties")
      .mockImplementation(() => Promise.resolve(mockProperties));
    expect(await simpleRestApi.getProperties("houston")).toMatchSnapshot();
  });
});
