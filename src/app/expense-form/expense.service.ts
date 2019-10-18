import { Injectable } from '@angular/core';
import { Expense} from '../expense';


const ALL_EXPENSES: Expense[] = [
    {id: 1,  date: '10/ 09/ 2019', merchant: 'Fast Foood', total: 100, comment: 'bought fast food' },
    {id: 2,  date: '10/ 09/ 2019', merchant: 'Taxi Ride', total: 10, comment: 'Had taxi ride share' },
    {id: 3,  date: '10/ 09/ 2019', merchant: 'Electronics', total: 1000, comment: 'Got new cell phone' },
    {id: 4,  date: '10/ 09/ 2019', merchant: 'Electronics', total: 1000, comment: 'Got new cell phone' },
    {id: 5,  date: '10/ 09/ 2019', merchant: 'Electronics', total: 1000, comment: 'Got new cell phone' },
    {id: 6,  date: '10/ 09/ 2019', merchant: 'Electronics', total: 1000, comment: 'Got new cell phone' },
    {id: 7,  date: '10/ 09/ 2019', merchant: 'Electronics', total: 1000, comment: 'Got new cell phone' }
  ];

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

    getAllExpenses() {
        return ALL_EXPENSES;
    }

  constructor() { }
}
