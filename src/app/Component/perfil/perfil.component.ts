import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  request: Object
  formActualizar: FormGroup;
  public nombre: String;
  public email: String;
  public session: Boolean  = false;

  constructor(private fb:FormBuilder, private api: ApiService, public router: Router ) {
    
  }

  ngOnInit(): void {
    this.sessionisactive();
    this.crForm();
  }

  actualizar() {
    this.setActualizar();
    this.api.actualizar(this.request).subscribe(data => {

      console.log(data)
      this.router.navigateByUrl('/perfil')
    }, error =>{
      switch (error.status) {
        case 422:
            alert("Correo o contraseña incorrectos")
          break;

        case 400:
            alert("El correo ya ha sido registrado")
          break;
        
        default:
          alert("Algo salio mal:(")
          console.log(error)
          break;
      }
      console.log(error)
      
    });
  }

    //Validor Formulario
  crForm(): void {
    this.formActualizar = this.fb.group({
        nombre: ['',[Validators.required]],
        email: ['',[Validators.required]]
    });
  }
  
  //Setear adtos del formulario
  setActualizar() {
    this.request = {
      nombre: this.formActualizar.get('nombre').value,
      email: this.formActualizar.get('email').value,
    }
  }



  cerrarSesion(){
    
    this.api.logout().subscribe(data => {
      console.log(data)
    }, error =>{
      
    });
    environment.token = null
    localStorage.clear()

    this.router.navigateByUrl("/inicio")
  }

  sessionisactive(){
    if(localStorage.getItem("TOKEN")){
      console.log("existe")
      this.api.check().subscribe(data => {
        this.session = true
        localStorage.setItem("USER_NAME",data.nombre)
        localStorage.setItem("USER_EMAIL",data.email)

        this.nombre = localStorage.getItem("USER_NAME")
        this.email = localStorage.getItem("USER_EMAIL")
        console.log(this.nombre)
        console.log(this.email)

      }, error =>{
        alert("Algo salio mal, Porfavor inicie sesion nuevamente")
        this.cerrarSesion()
      });
      
    }else{
      console.log("no existe")
      this.session = false
    }
  }

}
