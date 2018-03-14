import { Component } from '@angular/core';
import { IEvento } from './../interfaces/interface.evento';
import { EventosService } from '../services/eventos.service';
@Component({
    moduleId: module.id,
    templateUrl: 'views/cadastro.component.html'
})
export class CadastroComponent {
    //para um evento selecionado
    public eventoSelecionado: IEvento;
    private novoEvento: IEvento;

    public novo() {
        this.novoEvento = { descricao: '', data: '', preco: 0 }
        this.eventoSelecionado = this.novoEvento;
    }
    public incluir(evento: IEvento) {
        this.listaEventos.push(evento);
        alert('Evento incluído com sucesso');
    }

    public selecionar(item: IEvento): void {
        this.eventoSelecionado = item;
    }
    //lista de eventos
    public listaEventos: IEvento[];
    constructor(eventosService: EventosService) {
        this.listaEventos = eventosService.getEventos();
    }
}   