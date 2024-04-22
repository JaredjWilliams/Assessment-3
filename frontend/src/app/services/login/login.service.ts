import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {mockCredentials} from "../../utils/mocks/mockData";
import User from "../../models/User";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  getUser() {
    return this.http.post<User>('http://localhost:8080/user/login', mockCredentials);
  }

  isUserLoggedIn() {
    return sessionStorage.getItem('authenticatedUser') !== null;
  }





}
