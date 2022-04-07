import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

import { ValidatorService } from '../../../shared/services/validator.service';
import { RegistroService } from '../../services/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {

  keyEmpresa: string = this.registroService.keyEmpresa;
  registro: string = 'Regístrate para acceder'

  miFormulario: FormGroup = this.fb.group({
    nombre   : [ '', [Validators.required, Validators.pattern( this.validatorService.nombreApellidoPattern ) ] ],
    email    : [ '', [Validators.required, Validators.pattern( this.validatorService.emailPattern ) ] ],
    password : [ '', [Validators.required, Validators.minLength(6)] ],
    password2: [ '', [Validators.required ] ],
  }, {
    validators: [ this.validatorService.camposIguales('password', 'password2') ]
  })

  constructor(  private fb: FormBuilder, 
                private validatorService: ValidatorService,
                private registroService: RegistroService,
                private router: Router ,
                private _snackBar: MatSnackBar ) { }

  ngOnInit(): void {
    this.miFormulario.reset();

  }

  submitFormulario() {
    // console.log( this.miFormulario.value );
    this.miFormulario.markAllAsTouched();
  }

  campoNoValido( campo: string ) {
    return this.miFormulario.get(campo)?.invalid
            && this.miFormulario.get(campo)?.touched;
  }

  guardar() {
    // entrada de usuarios antiguos
    this.registroService.inputUsers();

    if ( this.miFormulario.invalid) { 
      this.miFormulario.markAllAsTouched();
      return;
    }

    let registroForm = {
      nombre    : this.miFormulario.controls['nombre'].value,
      email     : this.miFormulario.controls['email'].value,
      fechaIso  : Date(),
      password  : this.miFormulario.controls['password'].value,
    
    }

    if (this.miFormulario.valid) {
      this.registroService.grabar_LocalStorage( this.keyEmpresa, registroForm );  
      this.miFormulario.reset();
      this.openSnackBar();
      // Ir a login
      this.router.navigate(['./auth/login']);
    }
    else{
      this.error();
    }
    
    return false;
  }

  openSnackBar() {
    this._snackBar.open('Registro correcto', 'OK', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  error() {
    this._snackBar.open('No realizado el resgistro.', 'OK', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }


}
