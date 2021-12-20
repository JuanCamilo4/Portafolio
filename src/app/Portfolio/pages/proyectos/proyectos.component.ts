import { Component, OnInit } from '@angular/core';
import { RESTProject } from '../../interfaces/proyecto.interface';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  nombrePag: string = 'Proyectos';
  proyectos: RESTProject[] = [];

  constructor(private service: ServicesService) {
    this.getProyectos();
  }

  ngOnInit(): void {
  }

  getProyectos() {
    this.service.mostrarProyectos()
      .subscribe((res) => {
        console.log(res);
        this.proyectos = res;
      });
  }

}
