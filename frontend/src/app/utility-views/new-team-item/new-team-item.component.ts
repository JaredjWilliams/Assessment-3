import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CreateTeamComponent} from "../../overlays/create-team/create-team.component";

@Component({
  selector: 'app-new-team-item',
  templateUrl: './new-team-item.component.html',
  styleUrls: ['./new-team-item.component.css']
})
export class NewTeamItemComponent {


  constructor(
    private matDialog: MatDialog,
  ) { }

  createNewTeam() {
    this.openDialog()
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '768px';
    dialogConfig.height = '687px';
    this.matDialog.open(CreateTeamComponent, dialogConfig);
  }


}
