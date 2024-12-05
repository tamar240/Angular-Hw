import { Component } from '@angular/core';
import { Course, SubjectType } from '../../models/Course';
// import { FormsModule } from '@angular/forms';
import { CourseService  } from '../../services/course.service';
import { ColorCourseDirective } from '../../directives/color-course.directive';

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [ColorCourseDirective],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})

export class CoursesListComponent {

  courses: Course[];
  constructor(private courseService: CourseService) { 
    this.courses = this.courseService.getUsers();
  }

  public selectedOptions:Course[]=[];
  public colorArr=["red", "green", "yellow", "blue", "grey", "orange", "purple"  ,"violet", "pink"];
  public i=0;
  plusI=() => {this.i+=1; };

  addToSelected(course: any) {

    if (!this.selectedOptions.includes(course)) 
        this.selectedOptions.push(course);
    else
         this.selectedOptions = this.selectedOptions.filter(option => option.id != course.id);

  }
}
