import { Injectable } from '@angular/core';
import { Receta } from '../Interfaces/receta';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  public Receta:Receta
  constructor() { }

  setReceta(Receta:Receta){
    this.Receta = Receta;
  }

  getReceta(){
    return this.Receta
  }
}
