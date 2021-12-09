import { Component, Input, OnInit } from '@angular/core';
import { Receta } from 'src/app/Interfaces/receta';

@Component({
  selector: 'app-card-receta',
  templateUrl: './card-receta.component.html',
  styleUrls: ['./card-receta.component.css']
})

export class CardRecetaComponent implements OnInit {
  
  public nombre:String
  public imagen:String
  public pais:String

  @Input() recetas:Receta
  
  constructor() { }

  ngOnInit(): void {
  }

}
