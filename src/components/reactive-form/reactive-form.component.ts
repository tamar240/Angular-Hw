import { Component } from '@angular/core';
import {FormControl,FormBuilder, Validators, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { TeacherServiceService } from '../../services/teacher-service.service';
import { Teacher } from '../../models/Teacher';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  
  constructor(private teacherService:TeacherServiceService,private fb: FormBuilder){}
  
  teacherForm!: FormGroup;

  teachers=this.teacherService.get();
  public teacher: Teacher = new Teacher(this.teachers.length+1,'',[]);

  addTeacher()
  {

  }
  ngOnInit(): void {
    this.teacherForm = this.fb.group({
      id: [this.teacher.id,[ Validators.required , Validators.min(this.teachers.length+1)]],
      name: ['',[ Validators.required ,Validators.minLength(2)]],
      classes: ['']
      });
  }
onSubmit()
{
  if(this.teacherForm.valid)
  {
    this.teacherService.add(new Teacher(this.teacherForm.value.id, this.teacherForm.value.name, this.teacherForm.value.classes));
    this.teacherForm.reset();
  }
  else
    console.log('Form is invalid');
 
}

}
