import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ModuleService} from '../services/ModuleService';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  module_many = []
  constructor(private service: ModuleService,private router: Router ) {}

  ngOnInit() {
    this.service.findModulesForCourse(1).then(
      module_many => this.module_many = module_many
    );
  }

}
