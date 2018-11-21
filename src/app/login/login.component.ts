import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/service/authentication.service';
import {UserService} from "../shared/service/user.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  //moduleId: module.id,
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  errormessage = '';
  photo = 'https://bt.bmcdn.dk/media/cache/resolve/image_1240/image/114/1148486/21012825-218749363jpg.jpg';


  constructor(
    private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        success => {
          this.router.navigate(['/']);
        },
        error => {
          this.errormessage = error.message;
          this.loading = false;
        });
  }
}
