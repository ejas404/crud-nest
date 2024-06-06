import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/user/schemas/user.schema';
import { UserService } from 'src/user/user.service';
import { createUserResponse } from 'src/user/utils/create.response';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) { }

    async login(data: User): Promise<User> {
        const user = await this.userService.findUser(data.email);
        if (!user) throw new BadRequestException("No user existing");
        if (user.password !== data.password) throw new UnauthorizedException("Invalid email or password");

        return createUserResponse(user)
    }

    async signup(data: User): Promise<User> {
        const newUser = await this.userService.createUser(data)
        return createUserResponse(newUser)
    }
}
