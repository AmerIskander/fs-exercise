import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-table',
  standalone: true,
  imports: [MatPaginatorModule, MatTableModule, CommonModule],
  templateUrl: './custom-table.component.html',
  styleUrl: './custom-table.component.css'
})

export class CustomTableComponent {
  @Input() tableData: any[] = []; // Input property to receive data from the parent component
  displayedColumns: string[] = ['column1', 'column2', 'column3'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;
  renderedData: Observable<any> = this.dataSource.connect();

  ngOnInit() {
    this.dataSource.data = this.tableData; // Set the table data
    setTimeout(() => {
      this.dataSource.paginator = this.paginator ?? null;
    }, 5000);
  }
}

