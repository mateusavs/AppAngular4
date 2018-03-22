import { Component } from "@angular/core";

@Component({
    moduleId : module.id,
    selector : 'menu',
    templateUrl : "views/menu.component.html"
    
})
export class MenuComponent{

titulo_empresa : String = "Fiap";
titulo_principal : String = "Gestão de eventos";
titulo_home : String = "Home"
} 