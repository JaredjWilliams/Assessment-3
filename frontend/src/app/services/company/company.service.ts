import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Company from "../../models/Company";
import {mockCompany, mockCredentials} from "../../utils/mocks/mockData";
import Team from "../../models/Team";
import User from "../../models/User";
import {Projects} from "@angular/cli/lib/config/workspace-schema";

export const SELECTED_COMPANY = 'selectedCompany'

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(
    private http : HttpClient
  ) { }

  getSelectedCompany() {
    return localStorage.getItem(SELECTED_COMPANY)
  }

  getCompanies() {
    return this.http.get<[Company]>("http://localhost:8080/companies")
  }

  getTeamsFromCompany(id : number) {
    return this.http.get<[Team]>(`http://localhost:8080/companies/${id}/teams`)
  }

  postTeamToCompany(id : number, team : Team, isAdmin : boolean) {
    const request = {
      credentials: mockCredentials,
      team: team,
      isAdmin: isAdmin
    }
    return this.http.post<Team>(`http://localhost:8080/companies/${id}/teams`, request)
  }

  getUsersFromCompany(id : number) {
    return this.http.get<[User]>(`http://localhost:8080/companies/${id}/users`)
  }


  getCompanyProjects(id : number) {
    return this.http.get<[Projects]>(`http://localhost:8080/companies/${id}/projects`)
  }

  postTeamToCompanyMock(id : number, team : Team, isAdmin : boolean) {
    return mockCompany.teams.push(team);
  }

  getCompanyMock() {
    return mockCompany;
  }

  getTeamsFromCompanyMock() {
    return mockCompany.teams;
  }

  getUsersFromCompanyMock() {
    return mockCompany.employees;
  }
}
