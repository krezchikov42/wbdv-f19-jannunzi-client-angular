import { Component, OnInit } from '@angular/core';
import {LessonService} from '../services/LessonService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit {

  lesson_many = []
  constructor(private service: LessonService, private router: Router) { }

  ngOnInit() {
    this.service.findLessonsforModule(1).then(
      lesson_many => this.lesson_many = lesson_many
    )
  }

}
