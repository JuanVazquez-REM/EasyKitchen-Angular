import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Receta } from 'src/app/Interfaces/receta';
import { RecetaService } from 'src/app/Services/receta.service';

@Component({
  selector: 'app-inter-receta-italiana',
  templateUrl: './inter-receta-italiana.component.html',
  styleUrls: ['./inter-receta-italiana.component.css']
})
export class InterRecetaItalianaComponent implements OnInit {

  public session: Boolean;
  public Receta: Receta
  constructor(private router:Router,private api:ApiService,private serviceReceta:RecetaService) { }

  ngOnInit(): void {
    this.sessionisactive()
    this.Receta = this.serviceReceta.getReceta()
  }

  
  cerrarSesion(){
    this.api.logout().subscribe(data => {
      console.log(data)
    }, error =>{
      
    });
    
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


}
