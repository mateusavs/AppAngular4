import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { RouterModule } from '@angular/router';
import { appRoutes } from './rotas/app.routes';
import { FormsModule } from '@angular/forms'
import { AppComponent }  from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './erro/notfound.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { EventoService } from './services/eventos.service';
import { SubLista } from './filters/sublista.filter';

@NgModule({
  imports:      [ BrowserModule,RouterModule.forRoot(appRoutes),FormsModule],
  declarations: [ AppComponent,MenuComponent,NotFoundComponent,CadastroComponent,HomeComponent,SubLista ],
  providers : [EventoService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
