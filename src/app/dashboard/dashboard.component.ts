import { Component, OnInit } from '@angular/core';

import { Project } from '../project';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // projects = PROJECTS;

  constructor() { }

  ngOnInit() {
  }

}
