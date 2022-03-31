import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AuthModule } from './auth/auth.module';
import { EmployeesModule } from './employees/employees.module';


const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch:'full',
  },
  {
    path: 'auth',
    loadChildren: () => import( './auth/auth.module' ).then( m => AuthModule ),
  },
  {
    path: 'employees',
    loadChildren: () => import( './employees/employees.module').then ( m => EmployeesModule ),
  },
  {
    path: '**', redirectTo: 'login', pathMatch:'full',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
