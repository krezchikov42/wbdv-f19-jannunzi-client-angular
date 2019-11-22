import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ModuleService} from '../services/ModuleService';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {
  course_id = 1;
  module_many = [];
  selected_module = {};

  constructor(private service: ModuleService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // @ts-ignore
    this.activatedRoute.params
      .subscribe(params => {
        this.course_id = params['cid'];
        this.service.findModulesForCourse(this.course_id).then(
          module_many => this.module_many = module_many
        );
        ;
      });

  }

  selectModule(module: any) {
    this.selected_module = module;
    this.router.navigate([this.router.url, module.id, 'lessons']);
  }
}
