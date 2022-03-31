import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  // Quitar myPrueba
  myPrueba: boolean  = true;

  constructor(  private router: Router  ) { }

  ngOnInit(): void { }

  onPruebas() {
    if ( this.myPrueba == true) {
      this.router.navigate( ['./employees/inicio'] );
    }
  }

  onRegistro() {
    this.router.navigate( ['./auth/registro'] );
    
  }

}
