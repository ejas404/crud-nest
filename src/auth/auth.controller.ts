import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto} from 'src/user/dto/user.dto';
import { LoginDto } from './dto/login.dto';

@Controller('')
export class AuthController {

    constructor(private authService : AuthService){}

    @Post('login')
    async login(@Body() authData : LoginDto){  
        return await this.authService.login(authData)

    }

    @Post('signup')
    async signup(@Body() authData : CreateUserDto){  
        return await this.authService.signup(authData)
    }

}
