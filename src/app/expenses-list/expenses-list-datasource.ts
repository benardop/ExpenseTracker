import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface ExpensesListItem {
  date: string;
  merchant: string;
  total: number;
  comment: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ExpensesListItem[] = [
  {date: '1/9/2019', merchant: 'KFC', total: 400, comment: 'food expence'},
  {date: '1/9/2019', merchant: 'Total Gas', total: 400, comment: 'Gas expence'},
  {date: '1/9/2019', merchant: 'Bus Ticket', total: 100, comment: 'Travel expence'},
  {date: '1/9/2019', merchant: 'Movie Ticket', total: 100, comment: 'Theatre expence'},
  {date: '1/9/2019', merchant: 'Air Ticket', total: 400, comment: 'Travel expence'},
  {date: '1/9/2019', merchant: 'Domino Piza', total: 400, comment: 'food expence'},
  {date: '1/9/2019', merchant: 'McDonald', total: 400, comment: 'food expence'},
  {date: '1/9/2019', merchant: 'KFC', total: 400, comment: 'food expence'},
  {date: '1/9/2019', merchant: 'KFC', total: 400, comment: 'food expence'},
  {date: '1/9/2019', merchant: 'Chinese Fast Food', total: 400, comment: 'food expence'},
  {date: '1/9/2019', merchant: 'KFC', total: 400, comment: 'food expence'},
  {date: '1/9/2019', merchant: 'KFC', total: 400, comment: 'food expence'},
  {date: '1/9/2019', merchant: 'KFC', total: 400, comment: 'food expence'},
  {date: '1/9/2019', merchant: 'KFC', total: 400, comment: 'food expence'},
  {date: '1/9/2019', merchant: 'KFC', total: 400, comment: 'food expence'},
  {date: '1/9/2019', merchant: 'KFC', total: 400, comment: 'food expence'},
  {date: '1/9/2019', merchant: 'KFC', total: 400, comment: 'food expence'},
  {date: '1/9/2019', merchant: 'KFC', total: 400, comment: 'food expence'},
  {date: '1/9/2019', merchant: 'KFC', total: 400, comment: 'food expence'},
  {date: '1/9/2019', merchant: 'KFC', total: 400, comment: 'food expence'},
];

/**
 * Data source for the ExpensesList view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ExpensesListDataSource extends DataSource<ExpensesListItem> {
  data: ExpensesListItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ExpensesListItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: ExpensesListItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ExpensesListItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'date': return compare(a.date, b.date, isAsc);
        case 'merchant': return compare(+a.merchant, +b.merchant, isAsc);
        case 'total': return compare(+a.total, +b.total, isAsc);
        case 'comment': return compare(+a.comment, +b.comment, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
