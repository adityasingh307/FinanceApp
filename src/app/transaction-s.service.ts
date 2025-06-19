import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransactionSService {
  static getTrans(): any {
    throw new Error('Method not implemented.');
  }
  constructor() {}
  getTrans(): any {
    return [
      { id: 13, to: 'Mandeep K.', date: '2023-11-09', amount: 10000 },
      { id: 12, to: 'Mahesh D.', date: '2023-10-29', amount: 5000 },
      { id: 11, to: 'Avinash', date: '2023-10-23', amount: 7000 },
      { id: 10, to: 'Anup Kumar T.', date: '2023-10-20', amount: -30000 },
      { id: 9, to: 'Akhil', date: '2023-10-19', amount: 1000 },
      { id: 8, to: 'Aditya S.', date: '2023-10-13', amount: -10000 },
      { id: 7, to: 'Madhav J.', date: '2023-10-10', amount: -800 },
      { id: 6, to: 'Raj K.', date: '2023-10-01', amount: 18000 },
      { id: 5, to: 'Virat K.', date: '2023-09-30', amount: 40000 },
      { id: 4, to: 'Rohit S.', date: '2023-09-26', amount: -3000 },
      { id: 3, to: 'Anubhav Singh B.', date: '2023-09-21', amount: 1500 },
      { id: 2, to: 'Narendra M.', date: '2023-09-18', amount: -6000 },
      { id: 1, to: 'Vladimir Putin', date: '2023-09-11', amount: 10000 },
    ];
  }
}
