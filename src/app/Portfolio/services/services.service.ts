import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RESTAboutMe } from '../interfaces/infoMe.interface';
import { RESTProject } from '../interfaces/proyecto.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  mostrarProyectos(): Observable<RESTProject[]> {
    return this.http.get<RESTProject[]>('../../../assets/db/proyectos.json'); 
  }

  aboutMe(): Observable<RESTAboutMe> {
    return this.http.get<RESTAboutMe>('../../../assets/db/aboutMe.json');
  }

}
