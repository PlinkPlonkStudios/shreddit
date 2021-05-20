import { ApolloServer } from "apollo-server-koa";
import Koa from "koa";
import { buildSchema } from "type-graphql";
import { MikroORM } from "@mikro-orm/core";

import { PostResolver } from "@resolvers/.";
import mikroConfig from "@entities/mikro-orm.config";
import { Post } from "@entities/.";

const main = async () => {
  const orm = await MikroORM.init(mikroConfig);

  // Clear all posts
  await orm.em.nativeDelete(Post, {});
  const postTitles = ["First Cheese", "Second Cheese", "Third Shred"];
  const posts = postTitles.map((title) => orm.em.create(Post, { title }));
  await orm.em.persistAndFlush(posts);
  const retrievedPosts = await orm.em.find(Post, {});
  console.log(retrievedPosts);

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

main().catch((err) => console.error(err));
