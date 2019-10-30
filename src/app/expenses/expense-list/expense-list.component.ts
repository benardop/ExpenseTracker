import { Component, OnInit } from '@angular/core';
import {ExpenseService } from '../../shared/expense.service';
  import { from } from 'rxjs';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {

  constructor(private service: ExpenseService) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = [ 'merchant', 'total', 'comment', 'actions'];

  ngOnInit() {
    this.service.getExpenses().subscribe(
      list => {
        let array = list.map(item => {
           return {
             $key: item.key,
              ...item.payload.val()
           };
        });
        this.listData = new MatTableDataSource(array);
      });
  }

}
