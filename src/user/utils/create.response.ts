import { CreateUserDto } from "../dto/user.dto"
import { User, UserDocument } from "../schemas/user.schema"

export const createUserResponse = (user : UserDocument) : CreateUserDto => {
    const userDto = new CreateUserDto();
    userDto._id = user._id.toString() 
    userDto.name = user.name;
    userDto.email = user.email;
    userDto.role = user.role;
    return userDto
}