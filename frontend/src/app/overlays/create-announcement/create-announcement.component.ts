import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import User from "../../models/User";

@Component({
  selector: 'app-create-announcement',
  templateUrl: './create-announcement.component.html',
  styleUrls: ['./create-announcement.component.css']
})
export class CreateAnnouncementComponent implements OnInit {

  firstName: string = ""
  lastName: string = ""
  title : string = "";
  message : string = "";

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<CreateAnnouncementComponent>
  ) {
  }

  ngOnInit(): void {
    this.firstName = this.data.actionsObserver._value.loginSuccessResp.profile.firstName
    this.lastName = this.data.actionsObserver._value.loginSuccessResp.profile.lastName
  }


  submit() {
    this.dialogRef.close({

    });
  }

  exit() {
    this.dialogRef.close();
  }
}
