import { Component, OnInit } from '@angular/core';
import {OwnerService} from '../../shared/service/owner.service';
import {Owner} from '../../shared/model/owner';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {

  owners: Owner[];
  errormessage = '';
      constructor(private ownerService: OwnerService) { }

  ngOnInit() {
        this.refresh();
  }

  delete(id: number) {
        this.ownerService.deleteOwner(id).subscribe(() => {
          this.refresh();
        });
  }

  refresh() {
    this.ownerService.getOwners().subscribe(ownersList => {
      this.owners = ownersList;
    },
      error => {
      this.errormessage = error.message;
      }
      );
  }
}
