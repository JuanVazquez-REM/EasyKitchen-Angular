import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Receta } from 'src/app/Interfaces/receta';
import { environment } from 'src/environments/environment.prod';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-japonesa',
  templateUrl: './japonesa.component.html',
  styleUrls: ['./japonesa.component.css']
})
export class JaponesaComponent implements OnInit {
  public session: Boolean;
  public recetas:Array<Receta>

  constructor(private router: Router,private api:ApiService) { }

  ngOnInit(): void {
    this.sessionisactive()
    this.peticionRecetas()
  }

  cerrarSesion(){
    this.api.logout().subscribe(data => {
      console.log(data)
    }, error =>{
      
    });
    environment.token = null
    localStorage.removeItem("TOKEN")

    this.router.navigateByUrl("/inicio")
  }

  sessionisactive(){
    if(localStorage.getItem("TOKEN")){
      console.log("existe")
      this.api.check().subscribe(data => {
        this.session = true
      }, error =>{
        
      });
      
    }else{
      console.log("no existe")
      this.session = false
    }
  }
  peticionRecetas(){
    const request = {pais: "japonesas"}

    this.api.recetas(request).subscribe(data => {
      this.recetas = data
    }, error =>{
      console.log(error)
    });
  }
}
