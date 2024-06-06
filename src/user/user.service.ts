import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose, { Model } from "mongoose";
import { User } from "src/user/schemas/user.schema";


@Injectable()
export class UserService{

    constructor(@InjectModel(User.name) private userModel : Model<User>){}

    async createUser (data : User) : Promise<User>{
        return await this.userModel.create(data)   
    }


    async findUser(email : string) : Promise<User>{
            return await this.userModel.findOne({ email })
    }

    async blockUser(id : string){
        const user = this.userModel.findById(id);
        if(!user) throw new BadRequestException("Invalid user id");
        (await user).isBlocked = true;
        (await user).save()
        return true;
    }

    async unBlockUser(id : string){
        const user = this.userModel.findById(id);
        if(!user) throw new BadRequestException("Invalid user id");
        (await user).isBlocked = false;
        (await user).save()
        return true;
    }
}