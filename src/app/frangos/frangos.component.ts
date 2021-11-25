import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-frangos',
  templateUrl: './frangos.component.html',
  styleUrls: ['./frangos.component.scss'],
})
export class FrangosComponent implements OnInit {
  panelOpenState = false;

  ingredientes = [
    { name: 'peito de frango' },
    { name: 'dentes de alho amassados' },
    { name: '3 colheres de sopa de vinagre de álcool' },
    { name: 'Orégano' },
    { name: 'Sal do Himalaia' },
  ];

  preparo = [
    { name: 'Limpe o peito de frango e corte em formato de bifes' },
    { name: 'Misture os temperos e passe nos bifes' },
    {
      name: 'Deixe descansar por, no mínimo, 20 minutos para pagar bem o sabor',
    },
    {
      name: 'Em uma chapa quente e antiaderente grelhe os bifes dos dois lados até ficarem dourados',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
