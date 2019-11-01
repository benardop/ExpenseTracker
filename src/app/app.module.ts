import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { DatePipe } from '@angular/common';
import { environment } from '@src/environments/environment';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { ExpensesListComponent } from '@src/app/expenses-list/expenses-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material';
import { ExpenseFormComponent } from '@src/app/expense-form/expense-form.component';


import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { DialogBoxComponent } from '@src/app/dialog-box/dialog-box.component';
import { HttpClientModule } from '@angular/common/http';
import { ExpensesComponent } from '@src/app/expenses/expenses.component';
import { ExpenseComponent } from '@src/app/expenses/expense/expense.component';
import { from } from 'rxjs';
import { ExpenseService } from '@src/app/shared/expense.service';
import { MerchantService } from '@src/app/shared/merchant.service';
import { ExpenseListComponent } from '@src/app/expenses/expense-list/expense-list.component';
import { MatConfirmDialogComponent } from '@src/app/mat-confirm-dialog/mat-confirm-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExpensesListComponent,
    ExpenseFormComponent,
    DialogBoxComponent,
    ExpensesComponent,
    ExpenseComponent,
    ExpenseListComponent,
    MatConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatSelectModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatNativeDateModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  entryComponents: [
    DialogBoxComponent,
    ExpenseComponent,
    MatConfirmDialogComponent
  ],
  providers: [ExpenseService, MerchantService, DatePipe],
  bootstrap: [AppComponent],
  schemas: [
     NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
