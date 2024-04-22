import { Component } from '@angular/core';
import {CompanyService} from "../services/company/company.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private companyService: CompanyService,
  ) { }
}
