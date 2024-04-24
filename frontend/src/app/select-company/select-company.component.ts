import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../services/company/company.service";
import Company from "../models/Company";
import {Router} from "@angular/router";
import * as fromAuth from "../auth/auth.reducer";
import {Store} from "@ngrx/store";



@Component({
  selector: 'app-select-company',
  templateUrl: './select-company.component.html',
  styleUrls: ['./select-company.component.css']
})
export class SelectCompanyComponent implements OnInit {

  companies: Company[] = [];
  user$ = this.store.select(fromAuth.selectUser);

  constructor(
    private companyService: CompanyService,
    private store: Store<fromAuth.AuthState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.parseCompanies()
  }



  receiveCompany($event: any) {
    this.companyService.setSelectedCompany($event);
    this.router.navigate(['/home']);
  }

  parseCompanies() {
    this.user$.subscribe(
      user => {
        this.companies = user.companies
      }
    )
  }

}
