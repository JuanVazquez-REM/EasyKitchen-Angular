import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-colombiana',
  templateUrl: './colombiana.component.html',
  styleUrls: ['./colombiana.component.css']
})
export class ColombianaComponent implements OnInit {

  public session: Boolean;
  constructor(private router: Router,private api:ApiService) { }

  ngOnInit(): void {
    this.sessionisactive()
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
