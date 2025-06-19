import { Component, OnInit } from '@angular/core';
import { TransactionSService } from 'src/app/transaction-s.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {
  transactions: any;
  spents = 0;
  receive = 0;
  totalBalance = 0;
  setTransaction() {
    this.transactions = this.TransactionS.getTrans();
  }
  setSpents() {
    for (let i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].amount < 0) {
        this.spents += this.transactions[i].amount * -1;
      } else {
        this.spents += 0;
      }
    }
  }
  setReceive() {
    for (let i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].amount > 0) {
        this.receive += this.transactions[i].amount;
      } else {
        this.receive += 0;
      }
    }
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
    this.setSpents();
    this.setBalance();
    this.setReceive();
  }
}
