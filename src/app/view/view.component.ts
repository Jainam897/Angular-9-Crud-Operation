import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { Students } from '../students';
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
  constructor(private _studentsservice: StudentsService, private router: Router) { }

  ngOnInit(): void {

    this._studentsservice.getstudents()
      .subscribe((data: Students[]) => {
        this.students = data;
        console.log(this.students);
      });
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
}