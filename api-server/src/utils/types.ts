import { Connection, EntityManager, IDatabaseDriver } from "@mikro-orm/core";

export type MyContext = {
	// Copied directly from orm.em type
	// TODO make this dynamic?
	em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>,
}
