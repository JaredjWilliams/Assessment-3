import {Component, EventEmitter, Output} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CreateTeamComponent} from "../../overlays/create-team/create-team.component";
import Team from "../../models/Team";
import UserInfo from "../../models/UserInfo";

@Component({
  selector: 'app-new-team-item',
  templateUrl: './new-team-item.component.html',
  styleUrls: ['./new-team-item.component.css']
})
export class NewTeamItemComponent {
  @Output() newTeam = new EventEmitter<any>();


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
    const dialogRef = this.matDialog.open(CreateTeamComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result: Team) => {

      const team = {
        name: result.name,
        description: result.description,
        teammateIds: [...Array.from(result.teammates)].map((user: UserInfo) => user.id)
      }
      console.log(team)
      if (result) {
        this.newTeam.emit(team);
      }
    });

  }


}
