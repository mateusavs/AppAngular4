import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { appRoutes } from './rotas/app.routes';

import { AppComponent }  from './app.component';
import { MenuComponent } from './menu/menu.component';

//usado nas rotas
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NotFoundComponent } from './erro/notFound.component';
import { EventosService } from './services/eventos.service';

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), FormsModule ], //modulos
  declarations: [ AppComponent, 
    MenuComponent, 
    HomeComponent, 
    CadastroComponent, 
    NotFoundComponent ], //componentes
  providers : [ EventosService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
