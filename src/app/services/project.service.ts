import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Observable, of } from 'rxjs';

import { Project } from '../project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectsUrl = 'api/projects';  // URL to web api

  constructor( private http: HttpClient ) { }

  // GET All Project Data
  getProjects (): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl)
  }

  // GET Project by id. 
getProject(id: number): Observable<Project> {
  const url = `${this.projectsUrl}/${id}`;
  return this.http.get<Project>(url).pipe(
  );
}
}
