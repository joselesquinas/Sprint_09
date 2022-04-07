import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Users } from '../../../auth/interfaces/usuario.interface';
import { RegistroService } from '../../../auth/services/registro.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})


export class UsuariosComponent implements OnInit {

  keyEmpresa      : string = this.registroService.keyEmpresa;;
  myData          : Users [] = [];
  myDelete        : Users [] = [];

  displayedColumns: string[] = ['nombre', 'email', 'fechaIso', 'password', 'acciones'];
  dataSource!     : MatTableDataSource<any>;  

  constructor( private registroService: RegistroService ) { 
    // this.obtenerUsuarios();
  }

  ngOnInit(): void {
     this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.myData = [];
    this.myData = this.registroService.obtener_LocalStorage( this.keyEmpresa );
    this.dataSource = new MatTableDataSource(this.myData);
    console.log( this.myData );
  }


  deleteUser(id: number) {
   
    this.myDelete = [];

    this.myDelete = this.myData.splice(id , 1);
    this.registroService.eliminarDato_LocalStore( this.keyEmpresa );
    
    this.registroService.registro = [];
    if ( localStorage.getItem( this.keyEmpresa ) === null ) {
      for ( let i = 0; i < this.myData.length; i++) {
          this.registroService.grabar_LocalStorage( this.keyEmpresa , this.myData[i] )
      }
    }

    this.myData = [];
    this.myDelete = [];
    this.obtenerUsuarios();

  }



  


}
