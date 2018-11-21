import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../shared/service/authentication.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  title = 'Welcome to the PetShop!'
  username: string;
  errormessage: string = '';

  constructor(private authService: AuthenticationService) {
    this.username = this.authService.getUsername();
  }

  ngOnInit() {
  }

}
