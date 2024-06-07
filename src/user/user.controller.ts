import { Body, Controller, Get, Post,Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/auth/guards/auth.guard";


@Controller('user')
export class UserController{

    @UseGuards(AuthGuard)
    @Get()
    getProfile(@Request() req : any ){
        console.log(req.user)
    }
}