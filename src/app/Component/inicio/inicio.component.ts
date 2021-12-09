import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public session: Boolean;
  public nombre: String;
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.sessionisactive()
  }

  sessionisactive(){
    if(localStorage.getItem("TOKEN")){
      console.log("existe")
      this.api.check().subscribe(data => {
        this.session = true
        this.nombre = localStorage.getItem("USER_NAME")
      }, error =>{
        
      });
      
    }else{
      console.log("no existe")
      this.session = false
    }
  }

}
