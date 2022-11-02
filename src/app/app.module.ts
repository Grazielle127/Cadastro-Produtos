import { FormsModule } from '@angular/forms';
import { AnimalFormComponent } from './components/animal-form/animal.form.component';
import { AnimalDetailsComponent } from './components/animal-details/animal.details.component';
import { AnimalListComponent } from './components/animal-list/animal.list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosComponent } from './components/produtos/produtos.component'

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    AnimalListComponent,
    AnimalDetailsComponent,
    AnimalFormComponent,

  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
