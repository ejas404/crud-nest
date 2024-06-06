import { Roles } from "src/user/schemas/user.schema"

export class CreateUserDto{
    name : string
    email : string
    password : string
    role : Roles
}