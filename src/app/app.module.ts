import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EditCourseCreateComponent } from './edit-course-create/edit-course-create.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TabComponent } from './sidebar/tab/tab.component';
import { SubTabComponent } from './sidebar/tab/sub-tab/sub-tab.component';
import { HeaderComponent } from './header/header.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { EditCourseCreateSecondComponent } from './edit-course-create-second/edit-course-create-second.component';
import { EditScheduleComponent } from './edit-schedule/edit-schedule.component';
import { Editschedule2Component } from './editschedule2/editschedule2.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { DndDirective } from './dnd.directive';
import { MultiSelectDropdownComponent } from './multi-select-dropdown/multi-select-dropdown.component';
import { DdComponent } from './editschedule2/dd/dd.component';
import { CoursekitComponent } from './coursekit/coursekit.component';
import { FormsModule } from '@angular/forms';
import { CourseApprovalComponent } from './course-approval/course-approval.component';
import { AppRoutingModule } from './app-routing.module';
import { CourseCategoriesComponent } from './course-categories/course-categories.component';
import { CreateScheduleComponent } from './create-schedule/create-schedule.component';
import { ApprovalListComponent } from './approval-list/approval-list.component';
import { CompletionListComponent } from './completion-list/completion-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EditCourseCreateComponent,
    SidebarComponent,
    TabComponent,
    SubTabComponent,
    HeaderComponent,
    DropdownComponent,
    EditCourseCreateSecondComponent,
    EditScheduleComponent,
    Editschedule2Component,
    ScheduleComponent,
    DndDirective,
    MultiSelectDropdownComponent,
    DdComponent,
    CoursekitComponent,
    CourseApprovalComponent,
    CourseCategoriesComponent,
    CreateScheduleComponent,
    ApprovalListComponent,
    CompletionListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
