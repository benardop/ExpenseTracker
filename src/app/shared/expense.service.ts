import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private firebase: AngularFireDatabase) { }

   expenseList: AngularFireList<any>;

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    date: new FormControl('', Validators.required),
    merchant: new FormControl(0),
    total: new FormControl('', Validators.required),
    comment: new FormControl(''),
  });

  initializeFormGroup() {
    this.form.setValue({
       $key: null,
       date: '',
       merchant: 0,
       total: '',
       comment: ''
    });
  }

  // get all expenses
    getExpenses() {
        this.expenseList = this.firebase.list('expenses');
        return this.expenseList.snapshotChanges();
    }

    insertExpense(expense) {
         this.expenseList.push({
           date: expense.date,
           merchant: expense.merchant,
           total: expense.total,
           comment: expense.comment
         });
    }

    updateExpense(expense) {
      this.expenseList.update(expense.$key,
        {
          date: expense.date,
          merchant: expense.merchant,
          total: expense.total,
          comment: expense.comment
        });
    }

    deleteExpense($key: string) {
        this.expenseList.remove($key);
    }
}
