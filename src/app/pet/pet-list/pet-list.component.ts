import { Component, OnInit } from '@angular/core';
import {PetService} from '../../shared/service/pet.service';
import {Pet} from '../../shared/model/pet';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  pets: Pet[];

  constructor(private petService: PetService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.refresh();
  }

  delete(id: number) {
    this.petService.deletePet(id).subscribe(message => {
    this.refresh();
    });
  }

  refresh() {
    this.petService.getPets().subscribe(listOfPets => {this.pets = listOfPets; });
  }

}
