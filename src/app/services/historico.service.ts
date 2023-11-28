import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HistoricoService {
  private historico: string[] = [];

  obterHistorico(): string[] {
    return this.historico;
  }

  adicionarAoHistorico(expressao: string): void {
    this.historico.unshift(expressao);
  }
}