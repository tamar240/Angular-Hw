import { Component, Input } from '@angular/core';
import { student} from '../../models/student';
@Component({
  selector: 'app-student-detailes',
  standalone: true,
  imports: [],
  templateUrl: './student-detailes.component.html',
  styleUrl: './student-detailes.component.css'
})
export class StudentDetailesComponent {
 
  @Input() stud!:student;//משתנה שמקבל את התלמיד מהקומפוננטה STUDENT LIST 
  

  
}
