import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Project } from '../project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.scss'],
  providers: [ProjectService]
})
export class ProjectAddComponent implements OnInit {

  // Variables
  projects: Project[];

  constructor(
    private projectService: ProjectService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  // Go Back Button
  goBack(): void {
    this.location.back();
  }

  // ADD Project
  add(name: string, detail: string, active: boolean): void {
    name = name.trim();
    detail = detail.trim();
    if (!name) { return; }
    if (!detail) { return; }

    this.projectService.addProject({ name, detail, active } as Project)
      .subscribe(project => {
        this.projects.push(project);
      });
    this.goBack();
  }
}
