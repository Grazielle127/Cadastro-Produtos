import { Animal } from 'src/app/interfaces/Animal';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal-list',
  templateUrl: 'animal.list.component.html',
  styleUrls: ['animal.list.component.css'],
})
export class AnimalListComponent {
  @Input() animal!: Animal;
  constructor(private router: Router) {}

  onclick(animal: Animal) {
    this.router.navigate(['/animal-details', { id: animal.id }]);
  }

}
