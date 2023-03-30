import { Component } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css'],
})
export class PizzaComponent {
  //propieta di classe
  nomePizza!: string;
  condimentoAgg!: string;
  numPizze: number = 0;

  pizze: {
    nome: string;
    condimento: string;
  }[] = [];

  constructor() {}

  onReset() {
    this.nomePizza = '';
    this.condimentoAgg = '';
  }

  onAggiungiPizza() {
    let pizza = {
      nome: this.nomePizza,
      condimento: this.condimentoAgg,
    };
    this.pizze.push(pizza);
    this.numPizze++;
    console.log(this.pizze);
  }
}
