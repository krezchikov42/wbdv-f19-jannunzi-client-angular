import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../services/WidgetService';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  widget_many = [];

  constructor(private service: WidgetService) {
  }

  ngOnInit() {
    this.service.findWidgetsforTopic(1).then(
      widget_many => this.widget_many = widget_many
    );
  }

}
