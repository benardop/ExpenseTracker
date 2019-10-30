import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { ExpenseFormComponent } from '@src/app/expense-form/expense-form.component';
import { DialogBoxComponent } from '@src/app/dialog-box/dialog-box.component';
import { ExpensesComponent } from '@src/app/expenses/expenses.component';
import { ExpenseComponent } from '@src/app/expenses/expense/expense.component';
import { ExpenseListComponent } from '@src/app/expenses/expense-list/expense-list.component';


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExpenseFormComponent,
    DialogBoxComponent,
    ExpensesComponent,
    ExpenseComponent,
    ExpenseListComponent,
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
