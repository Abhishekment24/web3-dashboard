import { BASE_CALL } from "./baseCall";

export const API_CALL = {
  sunscription: {
    get: async () => await BASE_CALL.get("/subscriber/get")
  },
  users: {
    create: async (payload) => BASE_CALL.post("/user/create", payload),
    getByWallet: async (walletAddress) =>
      await BASE_CALL.get("/user/get-by-wallet", { walletAddress }),
    get: async (payload) => await BASE_CALL.get("/user/get", payload)
  }
};
