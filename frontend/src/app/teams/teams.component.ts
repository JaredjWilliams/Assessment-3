import {Component, OnInit} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AuthState, selectTeams, selectUser } from '../auth/auth.reducer';
import { Observable } from 'rxjs';
import Team from '../models/Team';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent  implements OnInit {
  teams$!: Observable<Team[]>;

  teams: Team[] = [];

  constructor(
    private store: Store<AuthState>,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.teams$ = this.store.pipe(select(selectTeams));
    console.log(this.teams$);
  }
}
