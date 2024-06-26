import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose, { Model } from "mongoose";
import { User, UserDocument } from "../../src/user/schemas/user.schema";


@Injectable()
export class UserService{

    constructor(@InjectModel(User.name) private userModel : Model<User>){}

    async createUser (data : User) : Promise<UserDocument>{
        return await this.userModel.create(data)   
    }


    async findUser(email : string) : Promise<UserDocument>{
            return await this.userModel.findOne({ email })
    }

    async blockUser(id : string){
        const user = await this.userModel.findById(id);
        if(!user) throw new BadRequestException("Invalid user id");
        user.isBlocked = true;
        await user.save()
        return true;
    }

    async unBlockUser(id : string){
        const user = await this.userModel.findById(id);
        if(!user) throw new BadRequestException("Invalid user id");
        user.isBlocked = false;
        await user.save()
        return true;
    }

    async deleteUser(id : string){
        const user = await this.userModel.findById(id);
        if(!user) throw new BadRequestException("Invalid user id");
        await user.deleteOne()
        return true;
    }
}