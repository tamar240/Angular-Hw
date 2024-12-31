import { Routes } from '@angular/router';
import { AddStudentComponent } from '../components/add-student/add-student.component';
import { CoursesListComponent } from '../components/courses-list/courses-list.component';
import { StudentDetailesComponent } from '../components/student-detailes/student-detailes.component';
import { StudentListComponent } from '../components/student-list/student-list.component';
import { TemplateDrivenFormsComponent } from '../components/template-driven-forms/template-driven-forms.component';
import { ReactiveFormComponent } from '../components/reactive-form/reactive-form.component';

export const routes: Routes = [
    {path: 'add-student', component:AddStudentComponent},
    {path: 'courses-list', component:CoursesListComponent},
    {path: 'student-detailes', component:StudentDetailesComponent},
    {path: 'student-list', component:StudentListComponent},
    {path: 'driven-form', component:TemplateDrivenFormsComponent},
    {path:'reactive-form', component:ReactiveFormComponent},
];
