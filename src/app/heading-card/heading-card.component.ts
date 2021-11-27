import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-heading-card',
  templateUrl: './heading-card.component.html',
  styleUrls: ['./heading-card.component.scss']
})
export class HeadingCardComponent implements OnInit {

  constructor(private transactionsService: TransactionsService) { }

  ngOnInit(): void {
  }

  getTotal(): number {
    this.transactionsService.getData('assets/data/transactions.json')
    .subscribe(transacts => {
      this.total = transacts.total
    })
    return this.total
  }
  
  total: number = this.getTotal()

}
