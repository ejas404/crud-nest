import { Controller, Delete, Param, Put, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
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

    @Delete(':id')
    async deleteUser(@Param('id') id : string){
        return await this.adminService.deleteUser(id)
    }
}   
