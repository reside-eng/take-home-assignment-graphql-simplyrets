import axios from "axios";
import { Property } from "../types/generated";

/**
 * Simple RETS API
 */
const simplyRestAPI = axios.create({
  baseURL: "https://api.simplyrets.com",
  auth: {
    username: process.env.SIMPLY_RETS_USERNAME || "simplyrets",
    password: process.env.SIMPLY_RETS_PWD || "simplyrets",
  },
});

export default {
  /**
   * Returns list of properties for a given city
   * @param city City
   * @returns list of properties that matches with the city, empty if no informed
   */
  getProperties: async (city: string): Promise<Property[]> => {
    if (!city) return [];
    const response = await simplyRestAPI.get("/properties", {
      params: { cities: city },
    });
    return response?.data?.map((d) => d.property as Property);
  },
};
