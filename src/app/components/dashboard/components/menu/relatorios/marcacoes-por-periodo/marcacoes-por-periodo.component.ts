import { MarcacoesService } from './../../marcacoes/service/marcacoes.service';
import { ScreenHandlerService } from 'src/app/shared-services/screen-handler/services/screen-handler.service';
import { Component, OnInit } from '@angular/core';
import { HeaderState } from '../../../header/domain/header-state';
import { FooterSectionMenu } from '../../../footer/domain/footer-section-menu';
import { ClockPunchWithWorker } from '../../marcacoes/marcacoes-busca/domain/clock-punch-with-worker';

@Component({
  selector: 'app-marcacoes-por-periodo',
  templateUrl: './marcacoes-por-periodo.component.html',
  styleUrls: ['./marcacoes-por-periodo.component.scss'],
})
export class MarcacoesPorPeriodoComponent implements OnInit {
  public titleIcon: FooterSectionMenu = FooterSectionMenu.REPORT;

  public dates: any = {
    startDate: '',
    finalDate: '',
  };

  public onReportMode: boolean = false;
  public clockPunches: Array<ClockPunchWithWorker> = [];

  constructor(
    private screenHandlerService: ScreenHandlerService,
    private marcacoesService: MarcacoesService
  ) {}

  ngOnInit(): void {
    this.screenHandlerService.setHeaderStateAs(HeaderState.FEATURE_STATE);
    this.screenHandlerService.setFooterVisibilityAs(false);
  }

  public generateReport(): void {
    this.marcacoesService
      .getClockPunchesBetween(
        this.dates.startDate + 'T00:00:00.000Z',
        this.dates.finalDate + 'T23:59:59.999Z'
      )
      .then((foundClockPunches) => {
        this.clockPunches = foundClockPunches;
        this.onReportMode = true;
      });
  }
}
