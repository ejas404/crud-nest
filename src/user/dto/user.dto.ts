import { IsEmail, IsEnum, IsNotEmpty } from "class-validator"
import { Roles } from "src/user/schemas/user.schema"

export class CreateUserDto{
    _id : string
    name : string

    @IsEmail()
    email : string

    @IsNotEmpty()
    password : string

    @IsEnum(Roles)
    role : Roles
    
    isBlocked : boolean
}

