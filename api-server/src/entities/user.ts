import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectId } from "mongodb";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class User {
  @Field(() => String)
  @PrimaryKey()
  _id!: ObjectId;

  @Field(() => Date)
  @Property({ type: "date" })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();

  @Field(() => String)
  @Property({ type: "text", unique: true })
  username!: string;

  @Property({ type: "text" })
  passwordHash!: string;
}
