import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

import { InicioComponent } from './pages/inicio/inicio.component';
import { InformesComponent } from './pages/informes/informes.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'agregar', component: AgregarComponent },
      { path: 'informes', component: InformesComponent },

    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})

export class EmployeesRoutingModule { }
