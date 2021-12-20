import { NgModule} from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { PortfolioComponent } from './Portfolio/pages/portfolio/portfolio.component';
import { ProyectosComponent } from './Portfolio/pages/proyectos/proyectos.component';
/*
    Path se usa para configurar que va aparecer el cada
    ruta
*/
const routes: Routes = [
    {
        path: '',
        component: PortfolioComponent,
        pathMatch: 'full'
    },
    {
        path: 'Proyectos',
        component: ProyectosComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}