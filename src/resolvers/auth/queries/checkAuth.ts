import { queryField } from "nexus";

export const CheckAuth = queryField("checkAuth", {
  type: "Boolean",
  resolve: async (_, __, ctx) => {
    console.log("zlzl ord irchleshd");
    return true;
  },
});
