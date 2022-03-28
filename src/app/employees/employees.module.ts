import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './pages/listado/listado.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    ListadoComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmployeesModule { }
