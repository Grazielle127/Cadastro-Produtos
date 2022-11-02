import { Animal } from 'src/app/interfaces/Animal';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.services';


@Component({
  selector: 'app-animal-details',
  templateUrl: 'animal.details.component.html',
  styleUrls: ['animal.details.component.css'],
})
export class AnimalDetailsComponent implements OnInit {
  animal!: Animal | null;
  @Output() trigger = new EventEmitter();
  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute,
    private animalService: AnimalService
  ) {}
  ngOnInit(): void {
    this.activeRouter.params.subscribe((params) => {
      //arrow function = () => {}
      this.animalService.getById(+params['id']).subscribe((animal) => {
        this.animal = animal;
      });
    });
  }

  voltar() {
    this.router.navigate(['/']);
  }
  
  edit(animal: Animal) {
    this.router.navigate(['/animal-form', { id: animal.id }]);

  }

  remove(animal: Animal) {
   this.animalService.remove(+animal.id).subscribe((isRemoved) => {

    if(isRemoved){
      this.router.navigateByUrl('/')
    }
   })
  }


}
