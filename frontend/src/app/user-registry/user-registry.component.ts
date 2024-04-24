import { Component, OnInit } from '@angular/core';
import UserInfo from '../models/UserInfo';
import { CompanyService } from '../services/company/company.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddUserComponent } from '../overlays/add-user/add-user.component';

@Component({
  selector: 'app-user-registry',
  templateUrl: './user-registry.component.html',
  styleUrls: ['./user-registry.component.css']
})
export class UserRegistryComponent implements OnInit {

  users : UserInfo[] = [];

  constructor (
    private companyService: CompanyService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.users = this.companyService.getUsersFromCompanyMock()
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.width = '490px';
    dialogConfig.height = '440px';
    this.matDialog.open(AddUserComponent, dialogConfig)
  }

}
