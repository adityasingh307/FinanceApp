import { Component, OnInit } from '@angular/core';
import { TransactionSService } from 'src/app/transaction-s.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  transactions: any;
  totalBalance = 0;
  setTransaction() {
    this.transactions = this.TransactionS.getTrans();
  }
  setBalance() {
    for (let i = 0; i < this.transactions.length; i++) {
      this.totalBalance += this.transactions[i].amount;
    }
  }
  constructor(private transaS: TransactionSService) {
    this.TransactionS = transaS;
  }
  private TransactionS: TransactionSService;

  ngOnInit() {
    this.setTransaction();
    this.setBalance();
  }
}
