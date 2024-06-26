import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from '../../src/user/user.service';

@Injectable()
export class AdminService {
    constructor(private userService: UserService) { }

    async blockUser(id: string) {
        const res = await this.userService.blockUser(id);
        if (!res) throw new BadRequestException('invalid id');
        return { success: true };
    }


    async unBlockUser(id: string) {
        const res = await this.userService.unBlockUser(id)
        if (!res) throw new BadRequestException('invalid id');
        return { success: true };
    }

    async deleteUser(id: string) {
        const res = await this.userService.deleteUser(id)
        if (!res) throw new BadRequestException('invalid id');
        return { success: true };
    }
}
