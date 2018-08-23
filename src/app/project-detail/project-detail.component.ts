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

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getProject();
  }

  // Pull Project Data by id
  getProject(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.projectService.getProject(id)
        .subscribe(project => this.project = project);
  }

  // Go Back Button
  goBack(): void {
    this.location.back();
  }
}
