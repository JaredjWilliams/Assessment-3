import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Project from '../../models/Project';


export const baseUrl = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
      private http : HttpClient
  ) { }

  getProjects(teamId: number) {
    return this.http.get<[Project]>(`${baseUrl}/projects/team/${teamId}`)
  }

  postProject(teamId: number, project: Project) {
    return this.http.post<Project>(`${baseUrl}/projects/team/${teamId}`, project)
  }

  updateProject(id: number | undefined, project: Project) {
    return this.http.put<Project>(`${baseUrl}/projects/${id}`, project)
  }
}
