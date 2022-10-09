import { ApplicationRoutes } from './../../../../../../shared-services/application-routes';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenHandlerService } from 'src/app/shared-services/screen-handler/services/screen-handler.service';
import { FooterSectionMenu } from '../../../footer/domain/footer-section-menu';
import { HeaderState } from '../../../header/domain/header-state';
import { FuncionariosService } from '../../funcionarios/service/funcionarios.service';

@Component({
  selector: 'app-marcacoes-busca',
  templateUrl: './marcacoes-busca.component.html',
  styleUrls: ['./marcacoes-busca.component.scss'],
})
export class MarcacoesBuscaComponent implements OnInit {
  public titleIcon: FooterSectionMenu = FooterSectionMenu.CLOCK;

  constructor(
    private screenHandlerService: ScreenHandlerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.screenHandlerService.setHeaderStateAs(HeaderState.FEATURE_STATE);
    this.screenHandlerService.setFooterVisibilityAs(false);
  }

  public viewByWorker(): void {
    this.router.navigate([
      ApplicationRoutes.DASHBOARD,
      ApplicationRoutes.MARCACOES,
      ApplicationRoutes.BUSCA,
      ApplicationRoutes.FUNCIONARIOS,
    ]);
  }

  public viewAll(): void {
    this.router.navigate([
      ApplicationRoutes.DASHBOARD,
      ApplicationRoutes.MARCACOES,
      ApplicationRoutes.BUSCA,
      ApplicationRoutes.TODOS,
    ]);
  }
}
