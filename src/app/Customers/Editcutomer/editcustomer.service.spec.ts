import { TestBed } from '@angular/core/testing';

import { EditCustomerService } from './editcustomer.service';

describe('EditCustomerService', () => {
  let service: EditCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
