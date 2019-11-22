import {Component, OnInit} from '@angular/core';
import {CourseService} from '../services/CourseService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  course_many = [];
  selected_course = {};

  constructor(private service: CourseService,  private router: Router) {
  }

  selectCourse(course) {
    this.selected_course = course;
    // this.router.navigate(['modules'])
  }

  // selectModule(module) {
  //   this.service.findLessonsForModule(module.id)
  //     .then(lessons => this.lessons = lessons);
  // }

  ngOnInit() {
    this.service.findAllCourses()
      .then(course_many => this.course_many = course_many);
  }

}
