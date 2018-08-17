import { Component, OnInit, Input } from '@angular/core';

import { Project } from '../project';
import { ProjectService } from '../services/project.service';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  @Input() project: Project;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {

  }
  
  // Pull Project Data by id
  getProject(2): void {
    this.projectService.getProject()
        .subscribe(project => this.project = project);
  }
}
