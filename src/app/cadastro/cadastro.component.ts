import { Component } from '@angular/core';
import { IEvento } from './../interfaces/interface.evento';
import { EventosService } from './../services/eventos.service';

@Component({
    moduleId: module.id,
    templateUrl: 'views/cadastro.component.html'
    /*
    template: `
        <div class="container margem">
        <h1>CADASTRO DE EVENTOS</h1>
        </div>
    `
    */
})
export class CadastroComponent {
    //para um evento selecionado
    public eventoSelecionado: IEvento;

    private novoEvento: IEvento;

    //para a inclusão de um novo evento
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


    public listaEventos: IEvento[];
    constructor(eventosService: EventosService) {
        this.listaEventos = eventosService.getEventos();
    }

    //definindo um array de eventos
    /*
    public listaEventos: IEvento[] = [
        { descricao:'Avaliação Angular', data: '23/10/2018', preco:0 },
        { descricao: 'Formatura', data: '02/05/2020', preco: 140 },
        { descricao: 'Torneio de Tenis', data: '10/07/2018', preco: 210 },
        { descricao: 'Congresso de TI', data: '16/01/2019', preco: 400 }
    ];
    */
}