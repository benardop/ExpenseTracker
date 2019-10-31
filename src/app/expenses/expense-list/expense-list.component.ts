import { Component, OnInit, ViewChild } from '@angular/core';
import {ExpenseService } from '../../shared/expense.service';
  import { from } from 'rxjs';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { MerchantService } from '../../shared/merchant.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {

  constructor(private service: ExpenseService,
              private merchantService: MerchantService) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = [ 'merchantName', 'total', 'comment', 'actions'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  searchKey: string;

  ngOnInit() {
    this.service.getExpenses().subscribe(
      list => {
        let array = list.map(item => {
         let merchantName = this.merchantService.getMerchantName(item.payload.val()['merchant']);
           return {
             $key: item.key,
               merchantName,
              ...item.payload.val()
           };
        });
        this.listData = new MatTableDataSource(array);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
      });
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

   applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();

  }

}
