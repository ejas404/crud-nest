import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from 'mongoose';

export enum Roles  {
    User = "User",
    Admin = "Admin"
}

export type UserDocument =  HydratedDocument<User>

@Schema()
export class User {

    @Prop({required : true})
    name : string;

    @Prop({required : true,unique : true})
    email : string;

    @Prop({required : true})
    password : string;

    @Prop({default : 'User'})
    role : Roles;

    @Prop({default : false})
    isBlocked : boolean;

}

export const UserSchema = SchemaFactory.createForClass(User)