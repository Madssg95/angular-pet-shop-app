import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../shared/service/user.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  errormessage = '';

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  create() {
    const user = this.userForm.value;
    this.userService.addUsers(user).subscribe(() => {
        this.router.navigate(['/login']);
      });
  }
}
