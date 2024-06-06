import { Controller, Param, Put } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {

    constructor(private adminService : AdminService){}

    @Put('block/:id')
    async blockUser(@Param('id') id : string){
        return await this.adminService.blockUser(id);
    }

    @Put('unblock/:id')
    async unBlockUser(@Param('id') id : string){
       return await this.adminService.unBlockUser(id)
    }


}
