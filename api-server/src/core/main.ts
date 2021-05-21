import { ApolloServer } from "apollo-server-koa";
import Koa from "koa";
import { buildSchema } from "type-graphql";
import { MikroORM } from "@mikro-orm/core";

import { PostResolver } from "@resolvers/.";
import mikroConfig from "@entities/mikro-orm.config";

const startServer = async () => {
  const orm = await MikroORM.init(mikroConfig);

  const app = new Koa();

	const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PostResolver],
    }),
    context: () => ({ em: orm.em }),
  });

	apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log(`********** server started on localhost:4000`);
  });
};

startServer().catch((err) => console.error(err));
