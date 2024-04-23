import { Component } from '@angular/core';
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
export class TeamsComponent {
  teams$!: Observable<Team[]>;

  constructor(private store: Store<AuthState>, private router: Router) { }

  ngOnInit(): void {
    this.teams$ = this.store.pipe(select(selectTeams));
  }

  showProjects(team: any): void {
    this.router.navigate(['/projects', { team: JSON.stringify(team) }]);
  }
}
