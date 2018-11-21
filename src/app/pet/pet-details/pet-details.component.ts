import { Component, OnInit } from '@angular/core';
import {Pet} from '../../shared/model/pet';
import {ActivatedRoute} from '@angular/router';
import {PetService} from '../../shared/service/pet.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {

  pet: Pet;

  constructor(private route: ActivatedRoute,
              private petService: PetService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.petService.getPetById(id).subscribe(singlePet => {
      this.pet = singlePet;
    });
  }

}
