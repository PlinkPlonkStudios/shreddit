import { MikroORM } from "@mikro-orm/core";
import { mikroConfig } from "src/entities/mikro-orm.config";
import { Post } from "../entities/Post";

const main = async () => {
	const orm = await MikroORM.init(mikroConfig);
	
	const post = orm.em.create(Post, { title: "First Cheese", })
	await orm.em.persistAndFlush(post);
	// await orm.em.nativeInsert(Post, { title: "First Cheese", })
};

main().catch((err) => console.error(err));
