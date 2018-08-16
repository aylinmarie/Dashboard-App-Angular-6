import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Project } from '../project';
import { PROJECTS } from '../project-list';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  // Pull in Project Data
  getProjects(): Observable<Project[]> {
    return of (PROJECTS);
  }
}
