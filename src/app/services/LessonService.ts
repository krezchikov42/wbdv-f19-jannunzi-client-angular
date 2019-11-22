import { Injectable } from "@angular/core";

@Injectable()
export class LessonService {
  findLessonsforModule = moduleId =>
    fetch(
      `http://localhost:8080/api/modules/${moduleId}/lessons`
    ).then(response => response.json());

  findLessoneById = lessonId =>
    fetch(`http://localhost:8080/api/lessons/${lessonId}`).then(response =>
      response.json()
    );
}
