import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ScreenHandlerService } from 'src/app/shared-services/screen-handler/services/screen-handler.service';
import { FooterSectionMenu } from '../../../../footer/domain/footer-section-menu';
import { HeaderState } from '../../../../header/domain/header-state';
import { ClockPunchWithWorker } from '../domain/clock-punch-with-worker';
import { MarcacoesService } from './../../service/marcacoes.service';
import { ApplicationRoutes } from 'src/app/shared-services/application-routes';

@Component({
  selector: 'app-marcacoes-busca-todos',
  templateUrl: './marcacoes-busca-todos.component.html',
  styleUrls: ['./marcacoes-busca-todos.component.scss'],
})
export class MarcacoesBuscaTodosComponent implements OnInit {
  public titleIcon: FooterSectionMenu = FooterSectionMenu.CLOCK;
  public clockPunches: Array<ClockPunchWithWorker> = [];

  constructor(
    private screenHandlerService: ScreenHandlerService,
    private marcacoesService: MarcacoesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.screenHandlerService.setHeaderStateAs(HeaderState.FEATURE_STATE);
    this.screenHandlerService.setFooterVisibilityAs(false);
    this.marcacoesService
      .getClockPunches()
      .subscribe((clockPunches) => (this.clockPunches = clockPunches));
  }

  public openClockPunch(clockPunchId: number | undefined): void {
    this.router.navigate([
      ApplicationRoutes.DASHBOARD,
      ApplicationRoutes.MARCACOES,
      ApplicationRoutes.BUSCA,
      clockPunchId
    ]);  }
}
