import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/model/alumno';
import { ServicioPruebaService } from 'src/app/servicios/servicio-prueba.service';

@Component({
  selector: 'app-prueba-consulta',
  templateUrl: './prueba-consulta.component.html',
  styleUrls: ['./prueba-consulta.component.css']
})
export class PruebaConsultaComponent implements OnInit {
  public dato: Alumno;
  public listaDatos: Alumno[];
  constructor(private servicioPruebaService: ServicioPruebaService) { }

  ngOnInit(): void {
    this.dato = new Alumno();
    this.dato.cedula ='888888';
    this.dato.nombrePila = 'prueba';

    this.servicioPruebaService.consultarAlumnos().subscribe( value => {
        console.debug(value);
        this.listaDatos = value ;
    }, error => {
      console.debug(error);
    });
  }

}
