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
  activeProjects = [];
  today = new Date();
  dd = this.today.getDate();
  mm = this.today.getMonth() + 1;
  yyyy = this.today.getFullYear();
  fullDate = this.mm + '.' + this.dd + '.' + this.yyyy;

  constructor(private projectService: ProjectService) { 
  }

  ngOnInit() {
    this.getProjects();
  }

  // Pull in Project Data
  getProjects(): void {
    this.projectService.getProjects()
      .subscribe((data) => {
            this.projects = data;

            // Identify Active Projects
            for(let project of this.projects) {
              if(project.active == true) {
                this.activeProjects.push(project);
              }
            }
         });
  }
}
