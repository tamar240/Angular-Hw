import { Component, ViewChild } from '@angular/core';
import { student } from '../../models/student';
import { StudentDetailesComponent } from "../student-detailes/student-detailes.component";
import { AddStudentComponent } from '../add-student/add-student.component';
import { IfromationComponent } from "../ifromation/ifromation.component";
import { NgTemplateOutlet } from '@angular/common';
import { CoursesListComponent } from '../courses-list/courses-list.component';


@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [StudentDetailesComponent, AddStudentComponent, IfromationComponent,NgTemplateOutlet,CoursesListComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {

  public students:student[]=[new student(1,"tamar","vurzel",false),new student(2,"yael","choen"),new student(3,"shira","levi")];
  @ViewChild(IfromationComponent)child!:IfromationComponent
  update(std:student){
   std.flag=true;
  }
  ngAfterViewInit() {
    if (!this.child) {
      console.error('InformationComponent לא אותחל');
    }
  }
  deleted(std:student){
    
    this.child.showPopUp("האם אתה בטוח שברצונך למחוק תלמיד זה?")
    //this.child.showPopUp("האם אתה בטוח שברצונך למחוק תלמיד זה?")
    setTimeout(() => {
      this.students = this.students.filter( s=> s.Id !== std.Id)
    }, 4000);
    
  }
  buttonAdd=false
  turnOnButton=()=>{this.buttonAdd=true}
   
  parentSave(student:student){
    console.log("save");
    this.students.push(student)
   
  }

}
