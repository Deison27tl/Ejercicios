import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Alumno } from '../model/alumno';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioPruebaService {
  
  baseUrl = environment.urlServices + 'usr/';

  constructor(private httpClient: HttpClient) { }

  consultarAlumnos(): Observable<Alumno []> {
    return this.httpClient.get<Alumno []>(this.baseUrl + 'consultarListaAlumnos', {  }).pipe(
      map((res: Alumno []) => {
        return res;
      })
    );
  }
}
