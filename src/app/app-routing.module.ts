import { ProdutosComponent } from './components/produtos/produtos.component';
import { AnimalDetailsComponent } from './components/animal-details/animal.details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalFormComponent } from './components/animal-form/animal.form.component';


const routes: Routes = [
  {
    path: '',
    component: ProdutosComponent
  },
  {
    path: 'animal-details',
    component: AnimalDetailsComponent,
  },
  {
    path: 'animal-form',
    component: AnimalFormComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
