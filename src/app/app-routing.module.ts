import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {WelcomeComponent} from './welcome/welcome/welcome.component';
import {PetListComponent} from './pet/pet-list/pet-list.component';
import {PetDetailsComponent} from './pet/pet-details/pet-details.component';
import {PetAddComponent} from './pet/pet-add/pet-add.component';
import {PetUpdateComponent} from './pet/pet-update/pet-update.component';
import {OwnerAddComponent} from './owner/owner-add/owner-add.component';
import {OwnerUpdateComponent} from './owner/owner-update/owner-update.component';
import {OwnerListComponent} from './owner/owner-list/owner-list.component';
import {OwnerDetailsComponent} from './owner/owner-details/owner-details.component';
import {AuthGuard} from "./_guard/auth.guard";
import {LoginComponent} from "./login/login.component";
import {UserComponent} from "./user/user.component";

const routes: Routes = [
  { path: 'pet/:id', component: PetDetailsComponent, canActivate: [AuthGuard] },
  { path: 'pet-update/:id', component: PetUpdateComponent, canActivate: [AuthGuard] },
  { path: 'pet-add', component: PetAddComponent, canActivate: [AuthGuard] },
  { path: 'pet', component: PetListComponent, canActivate: [AuthGuard] },
  { path: '', component: WelcomeComponent, canActivate: [AuthGuard] },
  { path: 'owner-add', component: OwnerAddComponent, canActivate: [AuthGuard] },
  { path: 'owner-update/:id', component: OwnerUpdateComponent, canActivate: [AuthGuard] },
  { path: 'owner/:id', component: OwnerDetailsComponent, canActivate: [AuthGuard] },
  { path: 'owner', component: OwnerListComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: 'user', component: UserComponent},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
