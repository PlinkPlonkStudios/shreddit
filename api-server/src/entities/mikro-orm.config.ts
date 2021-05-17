import path from "path";
import { MikroORM } from "@mikro-orm/core";

import { config } from "../core/config";
import { Post } from "./Post";

const mikroConfig = {
  // TODO Currently MikroORM has no MongoDB migrations support :/
  // Differences between our migrations and default options
  migrations: {
    path: path.join(__dirname, "./migrations"),
    // Want TS and JS
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  dbName: "shreddit",
  type: "mongo",
  debug: !config.prod,
} as Parameters<typeof MikroORM.init>[0];

export default mikroConfig;
