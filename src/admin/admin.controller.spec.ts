import { Test, TestingModule } from '@nestjs/testing';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '../../src/auth/guards/auth.guard';


describe('AdminController', () => {
  let adminController: AdminController;

  const mockAdminService = {
    blockUser: jest.fn(),
    unBlockUser: jest.fn(),
    deleteUser: jest.fn()
  }


  //user's mock id that pass through the params.
  const user_id = "1";

  //success response after operation.
  const response = { success: true };

  beforeEach(async () => {

    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminController],
      imports: [],
      providers: [
        {
          provide: AdminService,
          useValue: mockAdminService
        },
        {
          provide: JwtService,
          useValue: {
            verifyAsync: jest.fn().mockResolvedValue({ userId: 1 }), // Mocking verifyAsync method
          },
        },
        AuthGuard,
      ],
    }).overrideGuard(AuthGuard)
      .useValue({
        canActivate: jest.fn().mockResolvedValue(true),
      })
      .compile();

    adminController = module.get<AdminController>(AdminController);

  });

  it('should be defined', () => {
    expect(adminController).toBeDefined()
  })


  it('blockUser', async () => {
    
    jest.spyOn(mockAdminService,'blockUser').mockReturnValue(response)
    const result = await adminController.blockUser(user_id);

    expect(mockAdminService.blockUser).toHaveBeenCalled();
    expect(mockAdminService.blockUser).toHaveBeenCalledWith(user_id);
    expect(result).toEqual(response);

  });

  it('unBlockUser', async () => {

    jest.spyOn(mockAdminService,'unBlockUser').mockReturnValue(response)
    const result = await adminController.unBlockUser(user_id);

    expect(mockAdminService.unBlockUser).toHaveBeenCalled();
    expect(mockAdminService.unBlockUser).toHaveBeenCalledWith(user_id);
    expect(result).toEqual(response);
  });

  it('deleteUser', async () => {

    jest.spyOn(mockAdminService,'deleteUser').mockReturnValue(response)
    const result = await adminController.deleteUser(user_id);

    expect(mockAdminService.deleteUser).toHaveBeenCalled();
    expect(mockAdminService.deleteUser).toHaveBeenCalledWith(user_id);
    expect(result).toEqual(response);

  });


});