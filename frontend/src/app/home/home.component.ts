import {Component, OnInit} from '@angular/core';
import * as fromAuth from "../auth/auth.reducer";
import {Store} from "@ngrx/store";
import {selectIsAdmin} from "../auth/auth.reducer";
import Announcement from "../models/Announcement";
import {loremIpsum, mockUserInfo} from "../utils/mocks/mockData";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CreateAnnouncementComponent} from "../overlays/create-announcement/create-announcement.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isAdmin$ = this.store.select(fromAuth.selectIsAdmin);
  user$ = this.store.select(fromAuth.selectUser);

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
    private store: Store<fromAuth.AuthState>,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {

  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.user$;
    dialogConfig.width = '490px';
    dialogConfig.height = '440px';
    this.matDialog.open(CreateAnnouncementComponent, dialogConfig);
  }



}
