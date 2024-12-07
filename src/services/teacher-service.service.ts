import { Injectable } from '@angular/core';
import { Teacher } from '../models/Teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherServiceService {


  private teachers = [
    new Teacher(1, 'John Doe', ['A1', 'A2', 'A3']),
    new Teacher(2, 'Jane Smith', ['A1', 'A2', 'A3']),
    new Teacher(3, 'Michael Johnson', ['A1', 'A2', 'A3']),
  ]
  get() {
    return this.teachers;
  }
  add(teacher: Teacher) {
    this.teachers.push(teacher);
  }
  delete(id: number) {
    this.teachers = this.teachers.filter(t => t.id != id);
    console.log('deleted');

  }
  update(teacher: Teacher) {
    this.teachers.forEach(t => {
      if (t.id == teacher.id) {
        t.name = teacher.name;
        t.classes = teacher.classes;
      }});
  }
}
