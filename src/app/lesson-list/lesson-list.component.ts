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
  selected_lesson = {}
  constructor(private service: LessonService, private router: Router) { }

  ngOnInit() {
    this.service.findLessonsforModule(1).then(
      lesson_many => this.lesson_many = lesson_many
    )
  }

  selectLesson(lesson: any) {
    this.selected_lesson = lesson;
    this.router.navigate([this.router.url, lesson.id, 'topics'])
  }
}
