import { Injectable } from '@angular/core';
import { Course, SubjectType } from '../models/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses = [
    new Course(1, 'Mathematics', SubjectType.Mathematics),
    new Course(2, 'Programming', SubjectType.Programming),
    new Course(3, 'Accounting', SubjectType.Accounting),
    new Course(2, 'Graphics', SubjectType.Graphics),
    new Course(2, 'Art', SubjectType.Art),
    new Course(2, 'Science', SubjectType.Science),
    //... more courses here...
    

  ];
 
   getUsers() {
     //this.http.get<Student[]>('/api/heroes');
     return this.courses;
   }
 
   getUserById(id: number) {
     return this.courses.find(c => c.id == id);
   }
}
