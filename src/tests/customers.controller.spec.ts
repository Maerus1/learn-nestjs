import { Test, TestingModule } from '@nestjs/testing';
import { CustomersController } from '../controllers/customers.controller';
import { CustomersService } from '../services/customers.service';

describe('Customers Controller', () => {
  let controller: CustomersController;
  let customersService: CustomersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomersController],
      providers: [CustomersService]
    }).compile();

    customersService = module.get<CustomersService>(CustomersService);
    controller = module.get<CustomersController>(CustomersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('routes', () => {
    it('should return customer object', async () => {
      const result = [
        {
          firstName: 'Charles',
          lastName: 'Xavier'
        }
      ];
      jest.spyOn(customersService, 'getCustomers').mockImplementation(() => result);
      expect(await controller.getCustomers()).toEqual(result);
    });
  });
});
