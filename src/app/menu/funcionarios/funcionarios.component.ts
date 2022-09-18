import { FooterService } from './../../footer/service/footer.service';
import { HeaderState } from './../../header/domain/header-state';
import { HeaderService } from './../../header/service/header.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss']
})
export class FuncionariosComponent implements OnInit {

  constructor(private headerService: HeaderService, private footerService: FooterService) { }

  ngOnInit(): void {
    this.headerService.definirEstado(HeaderState.HOME_STATE);
    this.footerService.definirVisibilidadeComo(true);
  }

  abrirTelaDeBusca(): void {
    this.headerService.navegar(['funcionarios', 'busca']);
  }

}
