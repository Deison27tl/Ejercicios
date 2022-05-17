import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaConsultaComponent } from './maestros/prueba-consulta/prueba-consulta.component';

const routes: Routes = [
  {path: 'pruebaConsulta', component: PruebaConsultaComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
