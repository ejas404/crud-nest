import { Test, TestingModule } from '@nestjs/testing';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UserModule } from '../../src/user/user.module';


describe('AdminController', () => {
  let adminController: AdminController;
  let adminService: AdminService;

  beforeEach(async () => {

    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminController],
      imports : [],
      providers: [
        {
          provide: AdminService,
          useValue: {

            blockUser: jest.fn(),
            unBlockUser: jest.fn(),
            deleteUser: jest.fn(),
          }
        }
      ],
    }).compile();

    adminController = module.get<AdminController>(AdminController);
    adminService = module.get<AdminService>(AdminService);
  });

  describe('blockUser', () => {
    it('should call blockUser method of AdminService with correct id', async () => {
      const id = '1';
      await adminController.blockUser(id);
      expect(adminService.blockUser).toHaveBeenCalledWith(id);
    });
  });

  describe('unBlockUser', () => {
    it('should call unBlockUser method of AdminService with correct id', async () => {
      const id = '1';
      await adminController.unBlockUser(id);
      expect(adminService.unBlockUser).toHaveBeenCalledWith(id);
    });
  });

  describe('deleteUser', () => {
    it('should call deleteUser method of AdminService with correct id', async () => {
      const id = '1';
      await adminController.deleteUser(id);
      expect(adminService.deleteUser).toHaveBeenCalledWith(id);
    });
  });
});