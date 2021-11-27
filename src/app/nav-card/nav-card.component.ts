import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionsService } from '../transactions.service';
import { TYPES } from '../types';

@Component({
  selector: 'app-nav-card',
  templateUrl: './nav-card.component.html',
  styleUrls: ['./nav-card.component.scss']
})
export class NavCardComponent implements OnInit {

  constructor(private transactionService: TransactionsService, private router: Router) { }

  ngOnInit(): void { 
    this.idx = TYPES.indexOf(this.type!)
  }

  @Input() type?: string

  idx:number = 0

  data:any

  getCountTransactionsByType(): number {
    this.transactionService.getData('assets/data/transactions.json')
    .subscribe(transacts => {
      this.data = transacts.data
      this.count = this.data.filter((item: {type: string}) => item.type === this.type).length
    })    
    return this.count
  }
  
  count: number = this.getCountTransactionsByType()

}
