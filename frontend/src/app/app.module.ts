import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { ProjectsComponent } from './projects/projects.component';
import { SelectCompanyComponent } from './select-company/select-company.component';
import { UserRegistryComponent } from './user-registry/user-registry.component';
import { HeaderComponent } from './header/header.component';
import { CreateAnnouncementComponent } from './overlays/create-announcement/create-announcement.component';
import { CreateTeamComponent } from './overlays/create-team/create-team.component';
import { CreateProjectComponent } from './overlays/create-project/create-project.component';
import { EditProjectComponent } from './overlays/edit-project/edit-project.component';
import { AddUserComponent } from './overlays/add-user/add-user.component';
import { DropDownComponent } from './utility-views/drop-down/drop-down.component';
import {HttpClientModule} from "@angular/common/http";
import { TextInputComponent } from './utility-views/text-input/text-input.component';
import { AnnouncementCardComponent } from './utility-views/announcement-card/announcement-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { authReducer } from './auth/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/auth.effects';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TeamsComponent,
    ProjectsComponent,
    SelectCompanyComponent,
    UserRegistryComponent,
    HeaderComponent,
    CreateAnnouncementComponent,
    CreateTeamComponent,
    CreateProjectComponent,
    EditProjectComponent,
    AddUserComponent,
    DropDownComponent,
    TextInputComponent,
    AnnouncementCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({auth: authReducer}),
    EffectsModule.forRoot([AuthEffects]),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
