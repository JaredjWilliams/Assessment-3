import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company/company.service';
import Company from "../../models/Company";
import User from "../../models/User";

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent {

  @Input() items: any[] = [];
  @Input() companies: Company[] =  [];
  @Input() employees: User[] = [];
  @Input() forCompanies: boolean = false;
  @Input() forEmployees: boolean = false;

  @Output() companySelected = new EventEmitter<Company>();
  @Output() userSelected = new EventEmitter<User>();

  constructor () {}

  submitCompany(company: Company) {
    this.companySelected.emit(company);
  }

  submitUser(user: User) {
    this.userSelected.emit(user);
  }

  protected readonly JSON = JSON;




}

