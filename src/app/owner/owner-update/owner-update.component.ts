import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OwnerService} from '../../shared/service/owner.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-owner-update',
  templateUrl: './owner-update.component.html',
  styleUrls: ['./owner-update.component.css']
})
export class OwnerUpdateComponent implements OnInit {

    id: number;
    ownerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    phoneNumber: new FormControl('')
  });
  constructor(private route: ActivatedRoute,
              private ownerService: OwnerService,
              private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');

    this.ownerService.getOwnerById(this.id).subscribe(singleOwner => {
      this.ownerForm.patchValue({
        firstName: singleOwner.firstName,
        lastName: singleOwner.lastName,
        address: singleOwner.address,
        phoneNumber: singleOwner.phoneNumber
      });
    });
  }

  update() {
    const owner = this.ownerForm.value;
    owner.id = this.id;
    this.ownerService.updateOwner(owner).subscribe(() => {
      this.router.navigateByUrl('/owner');
    });
  }


}
