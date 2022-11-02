import { Component, OnInit } from '@angular/core';
import { AnimalService } from './../../services/animal.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-animal-form',
  templateUrl: 'animal.form.component.html',
  styleUrls: ['animal.form.component.css'],
})
export class AnimalFormComponent implements OnInit {
  animal = { name: null, type: null, age: null, breed: null, weight: null };
  edit!:boolean;
  id!:number;

  constructor(
    private animalService: AnimalService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRouter.params.subscribe((params) => {
      //arrow function = () => {}
      this.animalService.getById(+params['id']).subscribe((animal:any) => {
        console.log(animal);
        if(animal){
          this.edit= true;
          this.id = animal.id;
          this.animal = {...animal, id:animal.id}

        }
      });
    });
  }
  atualizar(id: number, animal: any){
    this.animalService.edit(id,animal).subscribe((animal) => {
      this.voltar();
      console.log(animal);
    });
  }
  editar(){
    this.atualizar(this.id,this.animal)

  }

  salvar() {
    this.animalService.create(this.animal).subscribe((animal) => {
      this.voltar();
      console.log(animal);
    });
  }

  voltar() {
    this.router.navigate(['/']);
  }
}
