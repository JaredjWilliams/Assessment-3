import {Component, OnInit} from '@angular/core';
import {LoginService} from "../services/login/login.service";

export const AUTHENTICATED_USER = 'authenticatedUser'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = ""
  password: string = ""

  constructor(
    private service: LoginService
  ) {
  }

  getUser() {
    this.service.getUser().subscribe((data) => {
      sessionStorage.setItem(AUTHENTICATED_USER, data.profile.firstName);
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.getUser()
  }


}
