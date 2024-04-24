import {Component, OnInit} from '@angular/core';
import { Store, select } from '@ngrx/store';
import {map, Observable, Subject, takeUntil} from 'rxjs';
import Team from '../models/Team';
import { Router } from '@angular/router';
import {CompanyService} from "../services/company/company.service";
import Company from "../models/Company";
import * as fromAuth from "../auth/auth.reducer";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent  implements OnInit {
  private destroy$ = new Subject<void>();
  isAdmin$ = this.store.select(fromAuth.selectIsAdmin);

  teams: Team[] = [];

  constructor(
    private store: Store<fromAuth.AuthState>,
    private router: Router,
    private companyService: CompanyService
    ) { }

  ngOnInit(): void {
    this.parseTeams()
  }

  parseTeams() {
    this.companyService.getSelectedCompany().pipe(
      takeUntil(this.destroy$),
      map((company : Company | null) => company ? company.teams : [])
    ).subscribe((teams : Team[]) => {
      console.log(teams)
      this.teams = teams;
    })
  }

  showProjects(team: any): void {
    this.router.navigate(['/projects', {team: JSON.stringify(team)}]);
  }
}
