import { Component, OnInit } from '@angular/core';
import {Owner} from '../../shared/model/owner';
import {ActivatedRoute} from '@angular/router';
import {OwnerService} from '../../shared/service/owner.service';

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.css']
})
export class OwnerDetailsComponent implements OnInit {

  owner: Owner;
  errormessage = '';

    constructor(private route: ActivatedRoute, private ownerService: OwnerService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ownerService.getOwnerById(id).subscribe( singleOwner => {
      this.owner = singleOwner;
    },
      error => {
        this.errormessage = error.message;
      });
  }

}
