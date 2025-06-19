import { TestBed } from '@angular/core/testing';

import { TransactionSService } from './transaction-s.service';

describe('TransactionSService', () => {
  let service: TransactionSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
