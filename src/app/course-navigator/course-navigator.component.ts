import { Component, OnInit } from '@angular/core';
import {CourseService} from '../services/CourseService';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  courses = []

  constructor(private service: CourseService) { }

  selectCourse(course) {
    this.service.findModulesForCourse(course.id)
  }

  // selectModule(module) {
  //   this.service.findLessonsForModule(module.id)
  //     .then(lessons => this.lessons = lessons);
  // }

  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
