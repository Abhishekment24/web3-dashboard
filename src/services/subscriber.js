import { BASE_CALL } from "./baseCall";

export const API_CALL = {
  sunscription: {
    get: async () => await BASE_CALL.get("/subscriber/get")
  }
};
