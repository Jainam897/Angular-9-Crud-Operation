import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { StudentsService } from '../students.service';
import { Students } from '../Students';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})


export class AddComponent implements OnInit {
  addForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private _studentsService: StudentsService, private router: Router) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      gmail: ['', Validators.required]

    });
  }


  onSubmit() {
    console.log(this.addForm.value);
    this._studentsService.insertStudent(this.addForm.value)
    .subscribe(data=>{
      this.router.navigate(['view']);

    });
  }

}
