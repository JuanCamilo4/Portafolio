import { Component } from '@angular/core';
import { Formacion, RESTAboutMe } from '../../interfaces/infoMe.interface';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-title-academic',
  templateUrl: './title-academic.component.html',
  styleUrls: ['./title-academic.component.css']
})
export class TitleAcademicComponent {

  public titulosAcademicos: Formacion[] = []; 

  constructor(private service: ServicesService) {
    this.mostrarFormacion();
  }

  mostrarFormacion() {
    this.service.aboutMe()
      .subscribe((res) => {
        this.titulosAcademicos = res.Formacion;
      });
  }
  
}
