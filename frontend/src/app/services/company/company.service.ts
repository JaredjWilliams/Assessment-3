import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Company from "../../models/Company";
import {mockCompany} from "../../utils/mocks/mockData";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(
    private http : HttpClient
  ) { }

  getCompanies() {
    return this.http.get<[Company]>("http://localhost:8080/companies")
  }

  getCompanyMock() {
    return mockCompany;
  }
}
