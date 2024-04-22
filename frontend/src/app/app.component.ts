import {Component, OnInit} from '@angular/core';
import {LoginService} from "./services/login/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  isAuthenticated: boolean = false;

  constructor(
    private loginService: LoginService
  ) {
  }

  ngOnInit(): void {
    this.isAuthenticated = this.loginService.isUserLoggedIn();
  }
}
