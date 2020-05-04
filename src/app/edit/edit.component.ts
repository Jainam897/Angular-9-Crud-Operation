import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from '../students.service';
import { Students } from '../Students';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { routes } from '../app.module';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  addForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private _studentsService: StudentsService, private router: Router, private routes: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.routes.snapshot.params;
    console.log(routeParams.id)

    this._studentsService.getStudentById(routeParams.id)
      .subscribe((data: any) => {
        console.log(data)

        this.addForm.patchValue(data);
      })

    this.addForm = this.formBuilder.group({
      id: [''],
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      gmail: ['', Validators.required]

    });
  }


  onEdit() {
    //   console.log(this.addForm.value)
    this._studentsService.updateStudentdata(this.addForm.value)
      .subscribe(() => this.router.navigate(['view']));
  }
}
