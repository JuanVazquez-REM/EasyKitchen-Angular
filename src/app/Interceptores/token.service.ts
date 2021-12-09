import { HttpEvent, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})

export class TokenService {

  constructor(public router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Interceptando peticion...") 
    let token = localStorage.getItem("TOKEN")
    const headers = new HttpHeaders({
      'Authorization': 'Bearer '+token
    })
    console.log(headers)

    const reqclone = req.clone({
      headers
    }) 
    console.log("Iterceptor: Token Instertado")
    return next.handle( reqclone );
  }
}
