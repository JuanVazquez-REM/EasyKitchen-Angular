import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  apiURL = environment.ApiUrl;
  
  constructor(private http: HttpClient) {}

  //Iniciar Sesion
  login(request: Object):Observable<any>{
    return this.http.post<any>(`${this.apiURL}login`, request)
  }

  //Registro
  registro(request: Object):Observable<any>{
    return this.http.post<any>(`${this.apiURL}register`, request)
  }

  //Recetas
  recetas(request: Object):Observable<any>{
    return this.http.post<any>(`${this.apiURL}recetas`, request)
  }

  //Actualizar
  actualizar(request: Object):Observable<any>{
    return this.http.post<any>(`${this.apiURL}update/user`, request)
  }

  //Check
  check():Observable<any>{
    return this.http.get<any>(`${this.apiURL}check`)
  }

  //Check
  logout():Observable<any>{
    return this.http.get<any>(`${this.apiURL}logout`)
  }


  //Cookies
  /* setToken(token) {
    this.cookies.set("token", token);
  }
  
  getToken() {
    return this.cookies.get("token");
  }

  CheckToken() {
    return this.cookies.check("token");
  }

  DeleteToken() {
    this.cookies.delete("token");
  } */

}
