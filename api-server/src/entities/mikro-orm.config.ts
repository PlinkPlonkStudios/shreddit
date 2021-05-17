import { MikroORM } from "@mikro-orm/core";

import { config } from "../core/config";
import { Post } from "./Post";

export const mikroConfig = {
  entities: [ Post, ],
  dbName: "shreddit",
  type: "mongo",
  debug: !config.prod,
  // user: "",
  // password: "",
} as Parameters<typeof MikroORM.init>[0];
