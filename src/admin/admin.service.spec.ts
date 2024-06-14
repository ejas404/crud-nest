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

  //user's mock id that pass through the params.
  const user_id = "1";
  //success response after operation.
  const response = { success: true };

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


  it('blockUser', async ()=>{

    jest.spyOn(mockUserService,'blockUser').mockReturnValue(response)
    const result = await service.blockUser(user_id)

    expect(userService.blockUser).toHaveBeenCalled();
    expect(userService.blockUser).toHaveBeenCalledWith(user_id)

    expect(result).toEqual(response)
  })

  it('unBlockUser', async ()=>{

    jest.spyOn(mockUserService,'unBlockUser').mockReturnValue(response)
    const result = await service.unBlockUser(user_id)

    expect(userService.unBlockUser).toHaveBeenCalled();
    expect(userService.unBlockUser).toHaveBeenCalledWith(user_id)

    expect(result).toEqual(response)
  })

  it('deleteUser', async ()=>{

    jest.spyOn(mockUserService,'unBlockUser').mockReturnValue(response)
    const result = await service.unBlockUser(user_id)

    expect(userService.unBlockUser).toHaveBeenCalled();
    expect(userService.unBlockUser).toHaveBeenCalledWith(user_id)

    expect(result).toEqual(response)
  })

});
