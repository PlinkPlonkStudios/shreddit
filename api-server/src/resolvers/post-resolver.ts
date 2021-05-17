import { Ctx, Query, Resolver } from "type-graphql";

import { MyContext } from "../utils";
import { Post } from "../entities";

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  posts(@Ctx() { em }: MyContext): Promise<Post[]> {
    return em.find(Post, {});
  }
}
