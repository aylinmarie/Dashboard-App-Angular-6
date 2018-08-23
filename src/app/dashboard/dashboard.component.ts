import { Component, OnInit } from '@angular/core';

import { Project } from '../project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  projects: Project[];
  today = new Date();
  dd = this.today.getDate();
  mm = this.today.getMonth() + 1;
  yyyy = this.today.getFullYear();
  fullDate = this.mm + '.' + this.dd + '.' + this.yyyy;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getProjects();
  }

  // Pull in Project Data
  getProjects(): void {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects);
  }
}
