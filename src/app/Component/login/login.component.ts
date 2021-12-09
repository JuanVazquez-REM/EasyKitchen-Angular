import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  request: Object
  formLogin: FormGroup;
  email: string;
  password: string;

  constructor(private fb:FormBuilder, private api: ApiService, public router: Router) {
    this.crForm();
  }

  ngOnInit(): void {
    
  }

  /* Form validation and setting */
  setLogin() {
    this.request = {
      email: this.formLogin.get('email').value,
      password: this.formLogin.get('password').value
    }
  }


  login() {
    this.setLogin();
    console.log("Datos que enviamos:")
    console.log(this.request)
    this.api.login(this.request).subscribe(data => {
      alert("Bienvenido "+ data.user.nombre)
      
      localStorage.setItem("TOKEN", data.token.token)
      localStorage.setItem("USER_NAME", data.user.nombre)
      localStorage.setItem("USER_EMAIL", data.user.email)
      var token = localStorage.getItem("TOKEN") 
      console.log(data)
      
      this.router.navigateByUrl('/inicio')
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
    this.formLogin = this.fb.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required]]
    });
  }


}
