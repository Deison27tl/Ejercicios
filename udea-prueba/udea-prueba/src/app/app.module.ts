import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaConsultaComponent } from './maestros/prueba-consulta/prueba-consulta.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaConsultaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    PruebaConsultaComponent
  ]
})
export class AppModule { }
