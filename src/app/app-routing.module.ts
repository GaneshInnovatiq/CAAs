import { NgModule } from '@angular/core';
import { ScheduleComponent } from './schedule/schedule.component';
import { RouterModule, Routes } from '@angular/router';
import { EditCourseCreateComponent } from './edit-course-create/edit-course-create.component';
import { CourseApprovalComponent } from './course-approval/course-approval.component';
import { CoursekitComponent } from './coursekit/coursekit.component';
import { EditScheduleComponent } from './edit-schedule/edit-schedule.component';
import { Editschedule2Component } from './editschedule2/editschedule2.component';
import { CourseCategoriesComponent } from './course-categories/course-categories.component';
import { CreateScheduleComponent } from './create-schedule/create-schedule.component';
import { ApprovalListComponent } from './approval-list/approval-list.component';
import { CompletionListComponent } from './completion-list/completion-list.component';

const routes: Routes = [
  {path: '', component: ScheduleComponent},
  {path: 'Schedule Class', component: ScheduleComponent},
  {path: 'Schedule Class/Add', component: CreateScheduleComponent},
  {path: 'Schedule Class/List', component: ScheduleComponent},
  {path: 'Schedule Class/Edit/1', component: EditScheduleComponent},
  {path: 'Schedule Class/Edit/2', component: Editschedule2Component},
  {path: 'Schedule Class/Approve List', component: ApprovalListComponent},
  {path: 'Schedule Class/Completion List', component: CompletionListComponent},
  {path: 'Course', component: EditCourseCreateComponent},
  {path: 'Course/Course Approval', component: CourseApprovalComponent},
  {path: 'Course/Course Kit', component: CoursekitComponent},
  {path: 'Course/Categories', component: CourseCategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
