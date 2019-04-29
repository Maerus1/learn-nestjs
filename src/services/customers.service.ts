import { Injectable } from '@nestjs/common';
import { Customer } from 'src/interfaces/customer.interface';

@Injectable()
export class CustomersService {
  private readonly customers: Customer[] = [];
  getCustomers(): Customer[] {
    return this.customers;
  }
}
