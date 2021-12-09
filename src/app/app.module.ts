import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { RegistroComponent } from './Component/registro/registro.component';
import { InicioComponent } from './Component/inicio/inicio.component';
import { MexicanaComponent } from './Component/mexicana/mexicana.component';
import { JaponesaComponent } from './Component/japonesa/japonesa.component';
import { ErrorComponent } from './Component/error/error.component';
import { PerfilComponent } from './Component/perfil/perfil.component';
import { CardRecetaComponent } from './Component/card-receta/card-receta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TokenService } from './Interceptores/token.service';
import { InterRecetaMexicanaComponent } from './Component/inter-receta-mexicana/inter-receta-mexicana.component';
import { InterRecetaColombianaComponent } from './Component/inter-receta-colombiana/inter-receta-colombiana.component';
import { InterRecetaEspanolaComponent } from './Component/inter-receta-espanola/inter-receta-espanola.component';
import { InterRecetaItalianaComponent } from './Component/inter-receta-italiana/inter-receta-italiana.component';
import { InterRecetaJaponesaComponent } from './Component/inter-receta-japonesa/inter-receta-japonesa.component';
import { InterRecetaChinaComponent } from './Component/inter-receta-china/inter-receta-china.component';
import { ChinaComponent } from './Component/china/china.component';
import { ColombianaComponent } from './Component/colombiana/colombiana.component';
import { EspanolaComponent } from './Component/espanola/espanola.component';
import { ItalianaComponent } from './Component/italiana/italiana.component';
import { CardRecetaInfoComponent } from './Component/card-receta-info/card-receta-info.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    InicioComponent,
    MexicanaComponent,
    JaponesaComponent,
    ErrorComponent,
    PerfilComponent,
    CardRecetaComponent,
    InterRecetaMexicanaComponent,
    InterRecetaColombianaComponent,
    InterRecetaEspanolaComponent,
    InterRecetaItalianaComponent,
    InterRecetaJaponesaComponent,
    InterRecetaChinaComponent,
    ChinaComponent,
    ColombianaComponent,
    EspanolaComponent,
    ItalianaComponent,
    CardRecetaInfoComponent,
    
  ],
  exports: [
    CommonModule,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
