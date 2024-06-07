import { Roles } from "src/user/schemas/user.schema"

export class CreateUserDto{
    _id : string
    name : string
    email : string
    password : string
    role : Roles
    isBlocked : boolean
}