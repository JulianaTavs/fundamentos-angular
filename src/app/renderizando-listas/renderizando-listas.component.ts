import { Component, OnInit } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {
  celulares: Celular[]=[
    {id:1,nome:"Celular XL",descricao:"Um celular grande", esgotado: false},
    {id:2,nome:"Celular normal",esgotado:false}
  ]
}


