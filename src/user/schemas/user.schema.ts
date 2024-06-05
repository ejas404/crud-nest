import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Roles  {
    User = "User",
    Admin = "Admin"
}

@Schema()
export class User {

    @Prop({required : true})
    name : string;

    @Prop({required : true})
    email : string;

    @Prop({required : true})
    password : string;

    @Prop({default : 'User'})
    role : Roles;
}

export const UserSchema = SchemaFactory.createForClass(User)