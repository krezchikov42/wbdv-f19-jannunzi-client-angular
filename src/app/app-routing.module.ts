import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {CourseNavigatorComponent} from './course-navigator/course-navigator.component';
import {ProfileComponent} from './profile/profile.component';
import {AdminUsersComponent} from './admin-users/admin-users.component';
import {ModuleListComponent} from './module-list/module-list.component';
import {LessonListComponent} from './lesson-list/lesson-list.component';
import {TopicListComponent} from './topic-list/topic-list.component';
import {WidgetListComponent} from './widget-list/widget-list.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'courses', component: CourseNavigatorComponent},
  {path: 'admin-users', component: AdminUsersComponent},
  {path: 'courses/:cid/modules', component: ModuleListComponent},
  {path: 'courses/:cid/modules/:mid/lessons', component: LessonListComponent},
  {path: 'courses/:cid/modules/:mid/lessons/:lid/topics', component: TopicListComponent},
  {path: 'courses/:cid/modules/:mid/lessons/:lid/topics/:tid/widgets', component: WidgetListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
