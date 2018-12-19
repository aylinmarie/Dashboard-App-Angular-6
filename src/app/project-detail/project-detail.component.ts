import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Project } from '../project';
import { ProjectService } from '../services/project.service';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  @Input() project: Project;
  isActive;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getProject();
  }

  // Go Back Button
  goBack(): void {
    this.location.back();
  }

  // Pull Project Data by id
  getProject(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.projectService.getProject(id)
        .subscribe((data) => {
          this.project = data;
          this.project.active ? this.isActive = 'Active' : this.isActive = 'Completed';
          console.log(this.project.active);
        })
  };

  // Delete Project
  delete(project: Project): void {
    this.projectService.deleteProject(project).subscribe();
    this.goBack();
  }

  // Toggle Active Project
  activeProject(active: boolean): void {
    this.projectService.updateProject({ active } as Project)
      .subscribe(project => {
        this.project.active = active;
      });
  }
}
