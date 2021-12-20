import { Component } from '@angular/core';
import { Habilidade } from '../../interfaces/infoMe.interface';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css']
})
export class AbilitiesComponent {

  public habilidades: Habilidade[] = [];

  constructor(private service: ServicesService) {
    this.mostrarHabilidades();
  }

  mostrarTecnologia(termino: string){
    alert(termino);
  }

  mostrarHabilidades() {
    this.service.aboutMe()
      .subscribe((res) => {
        this.habilidades = res.Habilidades;
      });
  }

}
