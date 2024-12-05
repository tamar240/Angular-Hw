import { Component, EventEmitter} from '@angular/core';
import { Output } from '@angular/core';
import { student } from '../../models/student';



@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  @Output() saveStudent: EventEmitter<any> = new EventEmitter<any>();
  public student: student = new student(1, "ikjk", "jijij")

  childSave(Id: string, firstName: string, lastName: string) {
    let id:number=Number(Id)
    this.student = new student(id, firstName, lastName)
    this.saveStudent.emit(this.student)
  }
}


