import { MikroORM } from "@mikro-orm/core";
import mikroConfig from "../entities/mikro-orm.config";
import { Post } from "../entities/Post";

const main = async () => {
	const orm = await MikroORM.init(mikroConfig);
	
	// Clear all posts
	orm.em.nativeDelete(Post, {})
	const postTitles = ["First Cheese", "Second Cheese", "Third Shred"];
	const posts = postTitles.map(title => orm.em.create(Post, { title }));
	await orm.em.persistAndFlush(posts);
	const retrievedPosts = await orm.em.find(Post, {});
	console.log(retrievedPosts);
};

main().catch((err) => console.error(err));
