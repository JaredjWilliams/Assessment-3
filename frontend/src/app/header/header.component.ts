import { Component } from '@angular/core';
import {CompanyService} from "../services/company/company.service";
import { Store } from '@ngrx/store';
import * as fromAuth from '../auth/auth.reducer'
import { logout } from '../auth/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  loggedIn$ = this.store.select(fromAuth.selectLoggedIn);
  user$ = this.store.select(fromAuth.selectUser);
  isAdmin$ = this.store.select(fromAuth.selectIsAdmin);
  firstLast$ = this.store.select(fromAuth.selectFirstLast);
  
  constructor(
    private companyService: CompanyService,
    private store: Store<fromAuth.AuthState>
  ) { }

  doLogout(): void {
    this.store.dispatch(logout());
  }
}
