import { Component } from '@angular/core';
import {CompanyService} from "../services/company/company.service";
import { Store } from '@ngrx/store';
import * as fromAuth from '../auth/auth.reducer'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  loggedIn$ = this.store.select(fromAuth.selectLoggedIn);
  user$ = this.store.select(fromAuth.selectUser);
  isAdmin$ = this.store.select(fromAuth.selectIsAdmin);
  
  constructor(
    private companyService: CompanyService,
    private store: Store<fromAuth.AuthState>
  ) { }
}
