import { Component } from "@angular/core";
import { IEvento } from "../interfaces/interface.evento";
import { EventoService } from "../services/eventos.service";

@Component({
    moduleId : module.id,
    templateUrl : "views/cadastro.component.html"
   
})
export class CadastroComponent{
    public listaEventos: IEvento[]
    public itemSelecionado : IEvento
    public novoEvento : IEvento;

    public novo(){
        this.novoEvento = {descricao: '', data:'',preco:0}
        this.itemSelecionado = this.novoEvento;
    }

    public incluir(evento : IEvento){
        this.listaEventos.push(evento);
        console.log("Salvando item na lista ");
    }

    public selecionar(item:IEvento):void{
        this.itemSelecionado = item;
    }
    constructor(eventoService : EventoService){
        this.listaEventos = eventoService.getEventos();
    }
        
       
}