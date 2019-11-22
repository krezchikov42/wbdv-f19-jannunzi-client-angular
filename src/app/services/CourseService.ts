import {Injectable} from '@angular/core';

@Injectable()
export class CourseService {
  findAllCourses = () =>
    fetch('http://localhost:8080/api/courses').then(response =>
      response.json()
    );

  findCoursebyId = id =>
    fetch(
      `https://enigmatic-river-50118.herokuapp.com/api/courses/${id}`
    ).then(response => response.json());

  findModulesForCourse = courseId =>
    fetch(
      `http://localhost:8080/api/courses/${courseId}/modules`
    ).then(response => response.json());

  findLessonsForModule = id =>
    fetch(`http://localhost:8080/api/modules/${id}/lessons`).then(response =>
      response.json()
    );
}
