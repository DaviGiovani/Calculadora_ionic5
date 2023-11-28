import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  // Conversão de unidades
  valor: number = 0;
  unidadeOrigem: string = '';
  unidadeDestino: string = '';
  resultadoConversao: number = 0;

  // Financeira
  principal: number = 0;
  taxaJuros: number = 0;
  periodo: number = 0;
  resultadoJuros: number = 0;

  // Data
  dataInicial: string = '';
  numeroDias: number = 0;
  resultadoData: string = '';

  constructor() {}

  // calculadora unidades

  atualizarUnidadeDestino() {
    // Se a unidade de origem é km, então a de destino é milhas e vice-versa
    this.unidadeDestino = this.unidadeOrigem === 'km' ? 'mi' : 'km';
  }

  atualizarUnidadeOrigem() {
    // Se a unidade de destino é km, então a de origem é milhas e vice-versa
    this.unidadeOrigem = this.unidadeDestino === 'km' ? 'mi' : 'km';
  }

  converterUnidades() {
    if (this.unidadeOrigem === 'km' && this.unidadeDestino === 'mi') {
      this.resultadoConversao = this.valor * 0.621371; // Converter km para milhas
      console.log(this.resultadoConversao);
    } else if (this.unidadeOrigem === 'mi' && this.unidadeDestino === 'km') {
      this.resultadoConversao = this.valor * 1.60934; // Converter milhas para km
      console.log(this.resultadoConversao);
    } else {
      // Adicione lógica para outras conversões, se necessário
      this.resultadoConversao = 0;
    }
  }

  calcular() {
    // Lógica de calculadora financeira aqui
    // Exemplo: cálculo de juros simples
    this.resultadoJuros = this.principal * (1 + this.taxaJuros * this.periodo);
  }

  calcularData() {
    // Lógica de calculadora de datas aqui
    const data = new Date(this.dataInicial);
    data.setDate(data.getDate() + this.numeroDias);
    this.resultadoData = data.toISOString().split('T')[0];
  }
}
