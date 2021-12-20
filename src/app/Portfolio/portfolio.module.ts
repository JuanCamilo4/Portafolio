import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderIndexComponent } from './pages/header-index/header-index.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { AbilitiesComponent } from './pages/abilities/abilities.component';
import { TitleAcademicComponent } from './pages/title-academic/title-academic.component';
import { LenguajeComponent } from './pages/lenguaje/lenguaje.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { SharedModule } from '../Shared/shared.module';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderIndexComponent,
    AboutMeComponent,
    AbilitiesComponent,
    TitleAcademicComponent,
    LenguajeComponent,
    PortfolioComponent,
    ProyectosComponent
  ],
  exports: [
    PortfolioComponent,
    ProyectosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class PortfolioModule { }
