import { Component } from '@angular/core';
import { HistoricoService } from '../services/historico.service';

@Component({
  selector: 'app-history',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  historico: string[] = [];

  constructor(private historicoService: HistoricoService) {}
    
  ionViewWillEnter() {
    this.historico = this.historicoService.obterHistorico();
    }
}