import { Injectable } from "@angular/core";

@Injectable()
export class TopicService {
  findTopicsforLesson = lessonId =>
    fetch(
      `http://localhost:8080/api/lessons/${lessonId}/topics`
    ).then(response => response.json());

  findTopicbyId = topicId =>
    fetch(`http://localhost:8080/api/topics/${topicId}`).then(response =>
      response.json()
    );
}
