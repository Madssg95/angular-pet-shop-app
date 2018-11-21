import { Component, OnInit } from '@angular/core';
import {PetService} from '../../shared/service/pet.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.css']
})
export class PetAddComponent implements OnInit {


  petForm = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    price: new FormControl('')
  });

  constructor(private petService: PetService,
              private router: Router ) { }

  ngOnInit() {
  }

  save() {
    const pet = this.petForm.value;
    this.petService.addPets(pet).subscribe( () => {
      this.router.navigateByUrl('/pet');
    });
  }

}
