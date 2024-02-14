import { arg, mutationField } from "nexus";

export const RefreshAccessToken = mutationField("refreshAccessToken", {
  type: "Boolean",
  resolve: async (_, j, ctx) => {
    return false;
  },
});
