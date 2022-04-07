import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Forms } from '../../interfaces/usuario.interface';
import { ValidatorService } from '../../../shared/services/validator.service';
import { RegistroService } from '../../services/registro.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  keyEmpresa : string = this.registroService.keyEmpresa;
  keyLogin   : string   = '';
  keyPassword: string   = '';
  myData     : Forms [] = [];
  validoLogin: boolean  = false;

  miFormulario: FormGroup = this.fb.group({
    email: [ '', [Validators.required, Validators.pattern( this.validatorService.emailPattern ) ] ],
    password: [ '', [Validators.required, Validators.minLength(6)] ],

  });

  constructor(  private fb: FormBuilder,
                private validatorService: ValidatorService,
                private registroService: RegistroService,
                private router: Router ,
                private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  campoNoValido( campo: string ) {
    return this.miFormulario.get(campo)?.invalid
            && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario() {
    console.log( 'Estado formulario  ' + this.miFormulario.value );
    this.miFormulario.markAllAsTouched();
  }

  loginNoValido() {
    return this.validoLogin;
  }

  submitLogin() {
    this.keyLogin    = this.miFormulario.controls['email'].value;
    this.keyPassword = this.miFormulario.controls['password'].value;

    console.log('email entregado  ' + this.keyLogin);
    console.log('Password entregado  ' + this.keyPassword);

    if ( localStorage.getItem( this.keyEmpresa ) === null ) {
      // alert("Te tienes que registrar");
      this.openSnackBar();
      this.router.navigate(['./auth/registro']);
    } else {
        this.myData = this.registroService.obtener_LocalStorage( this.keyEmpresa ) ;

        for(const [key, value] of Object.entries(this.myData)){
          // console.log(key + value.email );
          if ( this.keyLogin === value.email  &&  this.keyPassword === value.password ) {
              // console.log(" Esta logeado " + value.email  );
              this.validoLogin = true;
              this.loginNoValido();
              break;
          } 
        }

    };

    this.miFormulario.reset();

    if ( this.loginNoValido() ) {
      this.router.navigate(['./employees']);
    } else {
      this.validoLogin = false;
    }

    return false;
  };

  openSnackBar() {
    this._snackBar.open('Te tienes que registrar!!', 'OK', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  onRegistro() {
    this.router.navigate( ['./auth/registro'] );
  }

}
