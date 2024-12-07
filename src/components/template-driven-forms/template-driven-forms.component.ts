import { Component,input } from '@angular/core';
import { Teacher } from '../../models/Teacher';
import { TeacherServiceService } from '../../services/teacher-service.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.css'
})
export class TemplateDrivenFormsComponent {
  constructor(private teacherService: TeacherServiceService) { 

  }

public teachers: Teacher[] = this.teacherService.get();
public teacher: Teacher = new Teacher(this.teachers.length+1,'',[]);

addTeacher(){
  if(!this.teachers.find(t=>this.teacher.id==t.id))
      this.teacherService.add(new Teacher(this.teacher.id, this.teacher.name, this.teacher.classes));
  else
    this.teacherService.update(new Teacher(this.teacher.id, this.teacher.name, this.teacher.classes))

}




}
