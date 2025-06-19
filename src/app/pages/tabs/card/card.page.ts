import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
  showDetails: boolean = false;
  cardNumber: string = '4285 XXXX XXXX 7295';
  cvv: string = '***';
  expiry: string = 'MM / YY';
  constructor() {}
  ngOnInit() {}

  toggleCardDetails() {
    if (this.showDetails) {
      this.cardNumber = '4285 7629 3548 7295';
      this.cvv = '420';
      this.expiry = '11 / 30';
    } else {
      this.cardNumber = '4285 XXXX XXXX 7295';
      this.cvv = '***';
      this.expiry = 'MM / YY';
    }
  }
}
