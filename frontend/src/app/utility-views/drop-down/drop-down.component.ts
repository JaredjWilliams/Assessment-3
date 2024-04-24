import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company/company.service';
import Company from "../../models/Company";

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent {

  @Input() items: any[] = [];
  @Input() companies: Company[] =  [];

  @Output() companySelected = new EventEmitter<Company>();


  constructor (private router: Router, private companyService: CompanyService) {}

  submit(company: Company) {
    this.companySelected.emit(company);
  }

  protected readonly JSON = JSON;
}

