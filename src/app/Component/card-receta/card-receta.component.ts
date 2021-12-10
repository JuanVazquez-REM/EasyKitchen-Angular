import { Component, Input, OnInit } from '@angular/core';
import { Receta } from 'src/app/Interfaces/receta';
import { RecetaService } from 'src/app/Services/receta.service';
import { environment } from 'src/environments/environment.prod';
import { InterRecetaJaponesaComponent } from '../inter-receta-japonesa/inter-receta-japonesa.component';


@Component({
  selector: 'app-card-receta',
  templateUrl: './card-receta.component.html',
  styleUrls: ['./card-receta.component.css']
})

export class CardRecetaComponent implements OnInit {
  
  public nombre:String
  public imagen:String
  public pais:String

  @Input() recetas:Receta //array
  @Input() i:number //array
  public Receta:Receta //receta
  public index: number
  
  constructor(private servicioReceta:RecetaService) { }

  ngOnInit(): void {
  }


  verReceta(){
   /*  this.Receta = this.recetas
    console.log("mi receta")
    console.log(this.i)
    console.log(this.Receta) */

    this.servicioReceta.setReceta(this.recetas)
  }

}
