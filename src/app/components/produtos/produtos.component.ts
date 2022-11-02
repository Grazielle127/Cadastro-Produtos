import { AnimalService } from './../../services/animal.services';
import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  animals!: Animal[];
  constructor(private animalService: AnimalService, private router: Router) {}

  ngOnInit(): void {
    this.animalService.getAll().subscribe((animal) => {
      this.animals = animal;
      console.log(animal);
    });
  }
  salvar() {
    this.router.navigate(['/animal-form']);
  }
}
