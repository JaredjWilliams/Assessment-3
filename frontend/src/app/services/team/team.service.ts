import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Team from "../../models/Team";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(
   private http: HttpClient
  ) { }

  getTeams(id: string) {
    return this.http.get<[Team]>(`http://localhost:8080/companies/${id}/teams`)
  }
}
