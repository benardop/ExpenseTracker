import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatTable, MatPaginator } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { FormsModule } from '@angular/forms';

// import { Expense} from '../expense';

export interface ExpenseData {
  id: number;
  date: string;
  merchant: string;
  total: number;
  comment: string;
}

const ELEMENT_DATA: ExpenseData[] = [
  // tslint:disable-next-line: quotemark
  {id: 1,  date: "10/ 09/ 2019", merchant: 'Fast Foood', total: 100, comment: 'bought fast food' },
  {id: 2,  date: '10/ 09/ 2019', merchant: 'Taxi Ride', total: 10, comment: 'Had taxi ride share' },
  {id: 3,  date: '10/ 09/ 2019', merchant: 'Electronics', total: 1000, comment: 'Got new cell phone' },
  {id: 4,  date: '10/ 09/ 2019', merchant: 'Electronics', total: 1000, comment: 'Got new cell phone' },
  {id: 5,  date: '10/ 09/ 2019', merchant: 'Electronics', total: 1000, comment: 'Got new cell phone' },
  {id: 6,  date: '10/ 09/ 2019', merchant: 'Electronics', total: 1000, comment: 'Got new cell phone' },
  {id: 7,  date: '10/ 09/ 2019', merchant: 'Electronics', total: 1000, comment: 'Got new cell phone' }
];

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent {

     displayedColumns: string[] = ['date', 'merchant', 'total', 'comment', 'action'];
     dataSource = ELEMENT_DATA;

     @ViewChild(MatTable, {static: true}) table: MatTable<any>;
     @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

     constructor( public dialog: MatDialog) { }

     openDialog(action, obj) {
       obj.action = action;
       const dialogRef = this.dialog.open(DialogBoxComponent, {
         width: '300px',
         data: obj
       });

       dialogRef.afterClosed().subscribe(result => {
        if (result.event === 'Add') {
          this.addRowData(result.data);
        } else if (result.event === 'Update') {
          this.updateRowData(result.data);
        } else if (result.event === 'Delete') {
          this.deleteRowData(result.data);
        }
      });
    }

    addRowData(row_obj) {
      // const d = new Date();
      this.dataSource.push({
        id: row_obj.id,
        date: row_obj.date,
        merchant: row_obj.merchant,
        total: row_obj.total,
        comment: row_obj.component
      });
      this.table.renderRows();

    }
    updateRowData(row_obj) {
      this.dataSource = this.dataSource.filter((value, key) => {
        if (value.id === row_obj.id) {
          value.date = row_obj.date;
          value.merchant = row_obj.merchant;
          value.total = row_obj.total;
          value.comment = row_obj.comment;
        }
        return true;
      });
    }
    deleteRowData(row_obj) {
      this.dataSource = this.dataSource.filter((value, key) => {
        return value.id !== row_obj.id;
      });
    }

}


