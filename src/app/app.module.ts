import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetListComponent } from './pet/pet-list/pet-list.component';
import { PetAddComponent } from './pet/pet-add/pet-add.component';
import { PetDetailsComponent } from './pet/pet-details/pet-details.component';
import { PetUpdateComponent } from './pet/pet-update/pet-update.component';
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AlertModule } from 'ngx-bootstrap';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { OwnerAddComponent } from './owner/owner-add/owner-add.component';
import { OwnerDetailsComponent } from './owner/owner-details/owner-details.component';
import { OwnerListComponent } from './owner/owner-list/owner-list.component';
import { OwnerUpdateComponent } from './owner/owner-update/owner-update.component';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from "./_guard/auth.guard";
import {AuthenticationService} from "./shared/service/authentication.service";
import { ProgressbarModule } from 'ngx-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule, MatFormField,
  MatListModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    PetListComponent,
    PetAddComponent,
    PetDetailsComponent,
    PetUpdateComponent,
    WelcomeComponent,
    NavbarComponent,
    OwnerAddComponent,
    OwnerDetailsComponent,
    OwnerListComponent,
    OwnerUpdateComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    TabsModule.forRoot(),
    CarouselModule.forRoot(),
    ProgressbarModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    FlexLayoutModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
