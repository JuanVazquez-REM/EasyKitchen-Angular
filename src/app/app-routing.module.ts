import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChinaComponent } from './Component/china/china.component';
import { ColombianaComponent } from './Component/colombiana/colombiana.component';
import { ErrorComponent } from './Component/error/error.component';
import { EspanolaComponent } from './Component/espanola/espanola.component';
import { InicioComponent } from './Component/inicio/inicio.component';
import { InterRecetaChinaComponent } from './Component/inter-receta-china/inter-receta-china.component';
import { InterRecetaColombianaComponent } from './Component/inter-receta-colombiana/inter-receta-colombiana.component';
import { InterRecetaEspanolaComponent } from './Component/inter-receta-espanola/inter-receta-espanola.component';
import { InterRecetaItalianaComponent } from './Component/inter-receta-italiana/inter-receta-italiana.component';
import { InterRecetaJaponesaComponent } from './Component/inter-receta-japonesa/inter-receta-japonesa.component';
import { InterRecetaMexicanaComponent } from './Component/inter-receta-mexicana/inter-receta-mexicana.component';
import { ItalianaComponent } from './Component/italiana/italiana.component';
import { JaponesaComponent } from './Component/japonesa/japonesa.component';
import { LoginComponent } from './Component/login/login.component';
import { MexicanaComponent } from './Component/mexicana/mexicana.component';

import { PerfilComponent } from './Component/perfil/perfil.component';
import { RegistroComponent } from './Component/registro/registro.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path:'iniciarsesion', component:LoginComponent},
  {path:'registro', component:RegistroComponent},
  {path:'inicio', component:InicioComponent},
  {path:'perfil', component:PerfilComponent},

  {path:'recetas/mexicanas', component:MexicanaComponent},
  {path:'recetas/japonesas', component:JaponesaComponent},
  {path:'recetas/italianas', component:ItalianaComponent},
  {path:'recetas/españolas', component:EspanolaComponent},
  {path:'recetas/chinas', component:ChinaComponent},
  {path:'recetas/colombianas', component:ColombianaComponent},
  
  {path:'receta/mexicana', component:InterRecetaMexicanaComponent},
  {path:'receta/china', component:InterRecetaChinaComponent},
  {path:'receta/colombiana', component:InterRecetaColombianaComponent},
  {path:'receta/española', component:InterRecetaEspanolaComponent},
  {path:'receta/japonesa', component:InterRecetaJaponesaComponent},
  {path:'receta/italiana', component:InterRecetaItalianaComponent},

  {path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
