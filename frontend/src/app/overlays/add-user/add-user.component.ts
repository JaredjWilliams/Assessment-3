import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  firstName: string = ""
  lastName: string = ""
  email: string = ""
  phone: string = ""
  password: string = ""
  passwordRepeat: string = ""

  constructor (
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddUserComponent>
  ) {}

  ngOnInit(): void {
  }

  submit() {
    this.dialogRef.close({

    });
  }

  exit() {
    this.dialogRef.close();
  }

}
