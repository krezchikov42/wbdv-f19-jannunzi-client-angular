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
  selected_course = {id:0};

  constructor(private service: CourseService,  private router: Router) {
  }

  selectCourse(course) {
    this.selected_course = course;
    this.router.navigate([this.router.url,course.id,'modules'])
  }

  ngOnInit() {
    this.service.findAllCourses()
      .then(course_many => this.course_many = course_many);
  }

}
