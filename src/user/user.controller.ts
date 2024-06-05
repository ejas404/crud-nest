import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./dto/user.service";
import { CreateUserDto } from "./user.dto";

@Controller('user')
export class UserController{

    constructor(private userService : UserService){}
    
    @Get()
    userPage(){
        return "this is a user page"
    }

    @Post('login')
    async login(@Body() authData : CreateUserDto){
        
        return await this.userService.login(authData)
    }
}