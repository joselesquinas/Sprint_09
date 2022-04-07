import { Injectable } from '@angular/core';

import { Forms } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})

export class RegistroService {

  keyEmpresa: string = 'empresa@emp.com';

  registro: Forms  [] = [];

  constructor() { }

  obtener_LocalStorage( key: string  ): any {
    try {
      return JSON.parse(localStorage.getItem( key )!);
    } catch (e) {
      console.log(e);
    }
  }

  grabar_LocalStorage(newId: string, data: any): void {
    try {
      this.registro.push(data);
      localStorage.setItem(newId, JSON.stringify(this.registro));
    } catch (e) {
      console.log(e);
    }
  }


  eliminarDato_LocalStore(key: string  ): any {
    localStorage.removeItem( key );
  }

  eliminarTodo_LocalStore(){
    sessionStorage.clear();
  }



  
  // Datos iniciales de usuarios
    usuarios = [
      {
        "password": "11111111",
        "nombre": "Leanne Graham",
        "email": "lgraham@empresa.com",
        "fechaIso":"2022-03-08T00:19:05.805Z"
      },
      {
        "password": "22222222",
        "nombre": "Ervin Howell",
        "email": "ehowell@empresa.com",
        "fechaIso":"2021-03-08T00:19:05.805Z"
      },
      {
        "password": "33333333",
        "nombre": "Clementine Bauch",
        "email": "cbauch@empresa.com",
        "fechaIso":"2022-02-07T00:19:05.805Z"
      },
      {
        "password": "44444444",
        "nombre": "Patricia Lebsack",
        "email": "plebsack@empresa.com",
        "fechaIso":"2020-03-08T00:19:05.805Z"
      },
      {
        "password": "55555555",
        "nombre": "Chelsey Dietrich",
        "email": "cdietrich@empresa.com",
        "fechaIso":"2022-03-23T00:19:05.805Z"
      },
      {
        "password": "66666666",
        "nombre": "Dennis Schulist",
        "email": "dschulist@empresa.com",
        "fechaIso":"2022-01-18T00:19:05.805Z"
      },
      {
        "password": "77777777",
        "nombre": "Kurtis Weissnat",
        "email": "kweissnat@empresa.com",
        "fechaIso":"2021-12-28T00:19:05.805Z"
      },
      {
        "password": "88888888",
        "nombre": "Nicholas Runolfsdottir",
        "email": "nrunolfsdottir@empresa.com",
        "fechaIso":"2021-08-20T00:19:05.805Z"
      },
      {
        "password": "99999999",
        "nombre": "Glenna Reichert",
        "email": "greichert@empresa.com",
        "fechaIso":"2021-08-21T00:19:05.805Z"
      },
      {
        "password": "10101010",
        "nombre": "Clementina Dubuque",
        "email": "cdubuque@empresa.com",
        "fechaIso":"2022-02-08T00:19:05.805Z"
      }
  ];

  inputUsers () {
    if ( localStorage.getItem( this.keyEmpresa ) === null ) {
      for ( let i= 0; i < this.usuarios.length; i++) {
          this.grabar_LocalStorage( this.keyEmpresa , this.usuarios[i] )
      }
    }
  }


}
