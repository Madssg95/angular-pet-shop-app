import { Component, OnInit } from '@angular/core';
import {OwnerService} from '../../shared/service/owner.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-owner-add',
  templateUrl: './owner-add.component.html',
  styleUrls: ['./owner-add.component.css']
})
export class OwnerAddComponent implements OnInit {

  ownerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    phoneNumber: new FormControl('')
  });
    constructor(private ownerSerive: OwnerService, private router: Router) { }

  ngOnInit() {
  }

  save() {
      const owner = this.ownerForm.value;
      this.ownerSerive.addOwner(owner).subscribe( () => {
        this.router.navigateByUrl('/owner');
      });
  }

}
