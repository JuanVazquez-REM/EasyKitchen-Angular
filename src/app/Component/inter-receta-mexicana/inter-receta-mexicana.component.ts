import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-inter-receta-mexicana',
  templateUrl: './inter-receta-mexicana.component.html',
  styleUrls: ['./inter-receta-mexicana.component.css']
})
export class InterRecetaMexicanaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    environment.token = null;
    this.router.navigateByUrl("/inicio")
  }

}
