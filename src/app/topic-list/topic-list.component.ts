import {Component, OnInit} from '@angular/core';
import {TopicService} from '../services/TopicService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  topic_many = [];

  constructor(private service: TopicService, private router: Router) {
  }

  ngOnInit() {
    this.service.findTopicsforLesson(1).then(
      topic_many => this.topic_many = topic_many
    );
  }

}
