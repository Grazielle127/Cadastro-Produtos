import { Animal } from './../interfaces/Animal';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dog } from '../interfaces/dog';

@Injectable({ providedIn: 'root' })
export class AnimalService {
  lastId: any;
  animals: Dog[] = [
    { id: 1, name: 'Mel', age: 2, type: 'dog', breed: 'poodle', weight: 5 },
    {
      id: 2,
      name: 'Max',
      age: 1,
      type: 'Dog',
      breed: 'Pastor suiço',
      weight: 26,
    },
    {
      id: 3,
      name: 'Bob',
      age: 2,
      type: 'Dog',
      breed: 'Pastor suiço',
      weight: 35,
    },
    {
      id: 4,
      name: 'Honda',
      age: 3,
      type: 'Dog',
      breed: 'Pastor suiço',
      weight: 30,
    },
    {
      id: 5,
      name: 'Dadinho',
      age: 7,
      type: 'Dog',
      breed: 'Pastor alemao',
      weight: 30,
    },
    {
      id: 6,
      name: 'Fred',
      age: 6,
      type: 'Dog',
      breed: 'rottweiler',
      weight: 35,
    },
    {
      id: 7,
      name: 'Sushi',
      age: 2,
      type: 'Dog',
      breed: ' Dachshund',
      weight: 5,
    },
    {
      id: 8,
      name: 'Choco',
      age: 2,
      type: 'Dog',
      breed: ' Dachshund',
      weight: 6,
    },
    {
      id: 9,
      name: 'Baby',
      age: 2,
      type: 'Dog',
      breed: ' Dachshund',
      weight: 5,
    },
    {
      id: 10,
      name: 'Caramelo',
      age: 3,
      type: 'Dog',
      breed: 'street',
      weight: 20,
    },
  ];
  constructor() {}

  getAll(): Observable<Animal[]> {
    return of(this.animals);
  }

  remove(id: number): Observable<boolean> {
    // aqui é o final do metodo

    const index = this.animals.findIndex(function (animal) {
      return animal.id == id;
    });

    if (index >= 0) {
      this.animals.splice(index, 1);

      return of(true);
    }
    return of(false);

    //aqui é o escopo do metodo
  }

  edit(id: number, animal: Animal): Observable<boolean> {
    const index = this.animals.findIndex(function (animal) {
      return animal.id == id;
    });

    if (index >= 0) {
      this.animals[index] = animal;

      return of(true);
    }
    return of(false);
  }

  getById(id: number): Observable<Animal | null> {
    const animal = this.animals.filter(function (animal) {
      return animal.id == id;
    })[0];
    return of(animal);
  }

  create(animal: any): Observable<boolean> {
    this.lastId = this.animals[this.animals.length - 1].id;
    this.lastId++;
    this.animals.push({ id: this.lastId, ...animal });

    return of(true);
  }
}
