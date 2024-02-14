import { makeSchema } from "nexus";
import { Types } from "./resolvers";

export const schema = makeSchema({
  types: Types,
  contextType: {
    module: require.resolve("./context"),
    export: "Context",
  },
  sourceTypes: {
    modules: [
      {
        module: "@prisma/client",
        alias: "prisma",
      },
    ],
  },
});
