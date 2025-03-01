import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import {CourseService} from './services/CourseService';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule} from '@angular/forms';
import {UserService} from './services/UserService';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { ModuleListComponent } from './module-list/module-list.component';
import {ModuleService} from './services/ModuleService';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import {LessonService} from './services/LessonService';
import { TopicListComponent } from './topic-list/topic-list.component';
import {TopicService} from './services/TopicService';
import { WidgetListComponent } from './widget-list/widget-list.component';
import {WidgetService} from './services/WidgetService';

@NgModule({
  declarations: [
    AppComponent,
    CourseNavigatorComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AdminUsersComponent,
    ModuleListComponent,
    LessonListComponent,
    TopicListComponent,
    WidgetListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    WidgetService,
    TopicService,
    LessonService,
    ModuleService,
    CourseService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
