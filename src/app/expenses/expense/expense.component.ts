import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../shared/expense.service';
import { MerchantService } from '../../shared/merchant.service';
import { NotificationService } from '../../shared/notification.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  constructor(public service: ExpenseService,
              public merchantService: MerchantService,
              public notificationService: NotificationService) { }

    /*
    merchants = [
      {id: 1, value: 'Fast Food'},
      {id: 2, value: 'Taxi Ride'},
      {id: 3, value: 'Electronics'},
      {id: 4, value: 'Lunch'}
    ]; */

  ngOnInit() {
     this.service.getExpenses();
  }

  onClear() {
     this.service.form.reset();
     this.service.initializeFormGroup();
  }

  onSubmit() {
     if (this.service.form.valid) {
       this.service.insertExpense(this.service.form.value);
       this.service.form.reset();
       this.service.initializeFormGroup();
       this.notificationService.success(':: Submitted succesfully');
     }
  }

}
