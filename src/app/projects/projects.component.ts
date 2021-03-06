import { Component, OnInit } from '@angular/core';

import { Project } from '../project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {

  // Variables
  selectedProject: Project;
  projects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getProjects();
  }

  // View Project Data on Click
  onSelect(project: Project): void {
    this.selectedProject = project;
  }

  // Pull in Project Data
  getProjects(): void {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects);
  }

  // Delete Project
  delete(project: Project): void {
    this.projects = this.projects.filter(p => p !== project);
    this.projectService.deleteProject(project).subscribe();
  }
}
