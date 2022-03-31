import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { MaterialModule } from '../material/material.module';

import { ListadoComponent } from './pages/listado/listado.component';
import { HomeComponent } from './pages/home/home.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { InformesComponent } from './pages/informes/informes.component';



@NgModule({
  declarations: [
    ListadoComponent,
    HomeComponent,
    InicioComponent,
    NavbarComponent,
    UsuariosComponent,
    InformesComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    MaterialModule,
  ]
})
export class EmployeesModule { }
