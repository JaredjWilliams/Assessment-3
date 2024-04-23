import {Component, OnInit} from '@angular/core';
import * as fromAuth from "../auth/auth.reducer";
import {Store} from "@ngrx/store";
import {selectIsAdmin} from "../auth/auth.reducer";
import Announcement from "../models/Announcement";
import {loremIpsum, mockUserInfo} from "../utils/mocks/mockData";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isAdmin$ = this.store.select(fromAuth.selectIsAdmin);

  announcements: Announcement[] = [
    {
      id: 1,
      date: new Date(),
      title: 'Announcement 1',
      message: loremIpsum,
      author: mockUserInfo
    },
    {
      id: 2,
      date: new Date(),
      title: 'Announcement 2',
      message: loremIpsum,
      author: mockUserInfo
    },
    {
      id: 3,
      date: new Date(),
      title: 'Announcement 3',
      message: loremIpsum,
      author: mockUserInfo
    }
  ];


  constructor(
    private store: Store<fromAuth.AuthState>
  ) { }

  ngOnInit(): void {

  }



}
