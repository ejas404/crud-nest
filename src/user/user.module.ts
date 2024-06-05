import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "src/user/schemas/user.schema";
import { UserController } from "./user.controller";
import { UserService } from "./dto/user.service";

@Module({
    imports : [MongooseModule.forFeature([{name : User.name, schema : UserSchema}])],
    controllers : [UserController],
    providers : [UserService]
})
export class UserModule{}