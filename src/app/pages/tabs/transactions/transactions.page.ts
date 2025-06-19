import { Component, OnInit } from '@angular/core';
import { TransactionSService } from 'src/app/transaction-s.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {
  transactions: any;
  setTransaction() {
    this.transactions = this.TransactionS.getTrans();
  }

  constructor(private transaS: TransactionSService) {
    this.TransactionS = transaS;
  }
  private TransactionS: TransactionSService;

  ngOnInit() {
    this.setTransaction();
  }
}
