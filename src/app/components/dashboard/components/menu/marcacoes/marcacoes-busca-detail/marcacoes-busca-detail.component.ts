import { MarcacoesService } from './../service/marcacoes.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ScreenHandlerService } from 'src/app/shared-services/screen-handler/services/screen-handler.service';
import { FooterSectionMenu } from '../../../footer/domain/footer-section-menu';
import { HeaderState } from '../../../header/domain/header-state';
import { ClockPunchWithWorker } from '../marcacoes-busca/domain/clock-punch-with-worker';
import { Worker } from '../../funcionarios/domain/funcionario';

@Component({
  selector: 'app-marcacoes-busca-detail',
  templateUrl: './marcacoes-busca-detail.component.html',
  styleUrls: ['./marcacoes-busca-detail.component.scss']
})
export class MarcacoesBuscaDetailComponent implements OnInit {

  public titleIcon: FooterSectionMenu = FooterSectionMenu.CLOCK;
  public clockPunches: Array<ClockPunchWithWorker> = [];
  public clockPunchId: number = 0;
  public clockPunch: ClockPunchWithWorker = new ClockPunchWithWorker(undefined, 0, new Date(), new Worker(1, '', '', '', '', ''));

  constructor(
    private screenHandlerService: ScreenHandlerService,
    private route: ActivatedRoute,
    private marcacoesService: MarcacoesService
  ) {}

  ngOnInit(): void {
    this.screenHandlerService.setHeaderStateAs(HeaderState.FEATURE_STATE);
    this.screenHandlerService.setFooterVisibilityAs(false);

    this.route.paramMap.subscribe((params) => {
      this.clockPunchId = Number(params.get('id'));
      this.marcacoesService.getClockPunch(Number(params.get('id'))).subscribe(clockPunch => {
        this.clockPunch = clockPunch;
      });
    });
  }

}
