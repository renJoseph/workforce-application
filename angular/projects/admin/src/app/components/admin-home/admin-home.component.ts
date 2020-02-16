import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { AdminHomeDataSource, AdminHomeItem } from './admin-home-datasource';
import { UsersService } from 'src/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<AdminHomeItem>;
  dataSource: AdminHomeDataSource;

  constructor(private users: UsersService,
    private router: Router) { }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'role', 'firstName', 'lastName', 'email', 'password', 'dob'];

  ngOnInit() {
    this.dataSource = new AdminHomeDataSource();
    this.users.getAllUsers().subscribe((data: any) =>{
      this.dataSource.data = data;
    })
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
