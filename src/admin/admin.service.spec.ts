import { Test, TestingModule } from '@nestjs/testing';
import { AdminService } from './admin.service';
import { UserService } from '../../src/user/user.service';

describe('AdminService', () => {
  let service: AdminService;
  let userService : UserService;

  const mockUserService = {
    blockUser : jest.fn(),
    unBlockUser : jest.fn(),
    deleteUser : jest.fn()
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminService ,
      {
        provide : UserService,
        useValue :mockUserService 
      }
      ],
    }).compile();

    service = module.get<AdminService>(AdminService);
    userService = module.get<UserService>(UserService)
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


  it('blockUser should block a user and return success response', async ()=>{

    const id = "1"
    const response = { success: true };

    jest.spyOn(mockUserService,'blockUser').mockReturnValue(response)
    const result = await service.blockUser(id)

    expect(userService.blockUser).toHaveBeenCalled();
    expect(userService.blockUser).toHaveBeenCalledWith(id)

    expect(result).toEqual(response)
  })
  it('unBlockUser', ()=>{})
  it('deleteUser', ()=>{})

});
