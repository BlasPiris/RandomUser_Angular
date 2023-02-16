import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ApiComponent } from './components/api/api.component';
import { FormularioComponent } from './components/formulario/formulario.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"api",component:ApiComponent},
  {path:"formulario",component:FormularioComponent},
  {path:"**",component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
