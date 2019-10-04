import { Component, OnInit } from '@angular/core';

import { Expense} from '../expense';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent {

  merchant = ['Electronics', 'Food Supply', 'Rental Car', 'Bus Ride', 'Taxi', 'Hotel', 'Airline'];

  // tslint:disable-next-line: quotemark
  expense = new Expense(1, new Date(), this.merchant[0], 100, "bought cell phone");

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  // temporary part to be removed later
   get diagnostic() {
       return JSON.stringify(this.expense);
   }
  constructor() { }



}
