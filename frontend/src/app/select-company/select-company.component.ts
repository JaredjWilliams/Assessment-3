import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../services/company/company.service';

@Component({
  selector: 'app-select-company',
  templateUrl: './select-company.component.html',
  styleUrls: ['./select-company.component.css']
})
export class SelectCompanyComponent {

  constructor (private router: Router, private companyService: CompanyService) {}

  createSubmitFunc() {
    const curriedService = this.companyService;
    const curriedRouter = this.router;
    return (selectedItem: string) => {
      curriedService.setSelectedCompany(selectedItem);
      curriedRouter.navigate([''])
    }
  }
  
}
