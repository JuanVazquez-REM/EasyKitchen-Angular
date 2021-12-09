import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  request: Object
  formRegistro: FormGroup;

  constructor(private fb:FormBuilder, private api: ApiService, public router: Router) {
    this.crForm();
  }

  ngOnInit(): void {
  }

  register() {
    this.setRegistro();
    this.api.registro(this.request).subscribe(data => {
      alert("Te has registrado correctamente")
      this.router.navigateByUrl('/iniciarsesion')
    }, error =>{
      switch (error.status) {
        case 422:
            alert("Ingrese todos los datos correctamente")
          break;

        case 400:
            alert("El correo ya ha sido registrado")
          break;
        
        default:
          alert("Algo salio mal:(")
          console.log(error)
          break;
      }
    });
  }
  
  //Setear adtos del formulario
  setRegistro() {
    this.request = {
      nombre: this.formRegistro.get('nombre').value,
      email: this.formRegistro.get('email').value,
      password: this.formRegistro.get('password').value
    }
  }

    //Validor Formulario
  crForm(): void {
    this.formRegistro = this.fb.group({
      nombre: ['',[Validators.required]],
      email: ['',[Validators.required]],
      password: ['',[Validators.required]]
    });
  }


}
