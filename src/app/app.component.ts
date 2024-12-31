import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { StudentListComponent } from '../components/student-list/student-list.component';
import { CoursesListComponent } from "../components/courses-list/courses-list.component";
import { TemplateDrivenFormsComponent } from "../components/template-driven-forms/template-driven-forms.component";
import { IconsPipesPipe } from '../pipes/icons-pipes.pipe';
import {ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  // RouterOutlet
  imports: [
    // StudentListComponent,
    //  StudentListComponent,
    //   CoursesListComponent, 
    //   TemplateDrivenFormsComponent,
    //   IconsPipesPipe,
      RouterLinkActive,
      RouterOutlet, 
      RouterLink, 
   ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public word: string='';
  title = 'tamar vurzel';
  goodWord() {
    let hour = new Date().getHours();
    if (hour > 6 && hour < 12)
      return "good morning!"
    if (hour > 12 && hour < 16)
      return "good noon!"
    if (hour > 16 && hour < 20)
      return "good afternoon!"
    else
      return "good night!"
  }
}

