import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/user/schemas/user.schema";


@Injectable()
export class UserService{

    constructor(@InjectModel(User.name) private userModel : Model<User>){}

    async login(data : User) : Promise<User> {
        return await this.userModel.create(data)
    }
}