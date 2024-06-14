import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UserModule } from '../../src/user/user.module';

@Module({
  controllers: [AdminController],
  providers: [{ provide : "ADMIN_SERVICE" , useClass : AdminService}],
  imports : [UserModule]
})
export class AdminModule {}
