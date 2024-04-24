import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Team from '../models/Team';
import { HttpClient } from '@angular/common/http';
import Project from '../models/Project';

const baseUrl = 'http://localhost:8080'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  team!: Team; 
  projects: Project[] = [];

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.team = JSON.parse(params['team']);
      this.loadProjectsByTeamId(this.team.id);
    });
  }

  showProjects(team: Team): void {
    this.router.navigate(['/projects', { team: JSON.stringify(team) }]);
  }

  loadProjectsByTeamId(teamId: number): void {
    this.http.get<any[]>(`${baseUrl}/projects/team/${teamId}`).subscribe(
      (response) => {
        this.projects = response;
      },
      (error) => {
        console.error('Error loading projects:', error);
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/teams']); // Replace 'previous-page' with the route of the page you want to navigate back to
  }
}