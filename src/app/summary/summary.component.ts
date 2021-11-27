import { Component, OnInit } from '@angular/core';
import { TYPES } from '../types';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  types:string[] = TYPES

  constructor() { }

  ngOnInit(): void {
  }

}
