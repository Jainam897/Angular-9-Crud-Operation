import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentsService } from '../students.service';
import { Students } from '../students';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  students: Students[];
  _id: any;
  dataSource : any;
  displayedColumns = ['id', 'fname','lname','gmail','Update','Delete'];  
  //dataSource = new MatTableDataSource(this.students);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _studentsservice: StudentsService, private router: Router) { }
 

  ngOnInit() {

    this._studentsservice.getstudents()
      .subscribe((data: Students[]) => {
        this.students = data;
        console.log(this.students);
        this.students = data;  
        this.dataSource=new MatTableDataSource();
        this.dataSource.data = data;  
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort = this.sort;

        
      });
//    this.dataSource.paginator = this.paginator;
     // this.dataSource.sort = this.sort;


  }

  logdata(row) {
    console.log(row);
  }

  delete(students: Students): void {
    console.log(students.id);
    this._studentsservice.deleteStudent(students.id)
      .subscribe(data => {
        this.students = this.students.filter(u => u !== students);


      });

  }
  update(students: Students): void {
    this._id = students.id;

    this.router.navigate(['edit/' + this._id]);

  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}