import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/user/schemas/user.schema";
import { createUserResponse } from "./utils/create.response";


@Injectable()
export class UserService{

    constructor(@InjectModel(User.name) private userModel : Model<User>){}

    async createUser (data : User) : Promise<User>{
        return await this.userModel.create(data)   
    }


    async findUser(email : string) : Promise<User>{
        try{
            return await this.userModel.findOne({ email })
        }catch(e){
            console.log(e)
        }
    }
}