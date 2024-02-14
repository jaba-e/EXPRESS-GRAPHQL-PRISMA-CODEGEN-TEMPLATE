import { Mutations } from "./mutations";
import { Queries } from "./queries";
import { Types } from "./types";

export const Auth = [...Mutations, ...Queries, ...Types];
export const AuthQueryMutation = [...Mutations, ...Queries];
