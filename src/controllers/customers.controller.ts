import { Controller, Get } from '@nestjs/common';
import { CustomersService } from '../services/customers.service';
import { Customer } from '../interfaces/customer.interface';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {

  }

  @Get()
  async getCustomers(): Promise<Customer[]> {
    return this.customersService.getCustomers();
  }
}
