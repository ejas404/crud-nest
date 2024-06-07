import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/user.dto';
import { User } from 'src/user/schemas/user.schema';
import { UserService } from 'src/user/user.service';
import { createUserResponse } from 'src/user/utils/create.response';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) { }

    async login(data: LoginDto): Promise<{ userDto: CreateUserDto, access_token: string }> {
        const user = await this.userService.findUser(data.email);
        if (!user) throw new BadRequestException("No user existing");
        if (user.password !== data.password) throw new UnauthorizedException("Invalid email or password");

        const userDto = createUserResponse(user)
        const payload = { sub: userDto._id, username: userDto.name };
        const access_token = await this.jwtService.signAsync(payload)

        return { userDto, access_token }
    }

    async signup(data: User): Promise<User> {
        const newUser = await this.userService.createUser(data)
        return createUserResponse(newUser)
    }
}
