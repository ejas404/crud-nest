import { CreateUserDto } from "../dto/user.dto"
import { User } from "../schemas/user.schema"

export const createUserResponse = (user : User) : CreateUserDto => {
    const userDto = new CreateUserDto();
    userDto.name = user.name;
    userDto.email = user.email;
    userDto.role = user.role;
    return userDto
}