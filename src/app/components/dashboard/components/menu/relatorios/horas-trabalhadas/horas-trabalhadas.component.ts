import { FuncionariosService } from './../../funcionarios/service/funcionarios.service';
import { Component, OnInit } from '@angular/core';
import { ScreenHandlerService } from 'src/app/shared-services/screen-handler/services/screen-handler.service';
import { FooterSectionMenu } from '../../../footer/domain/footer-section-menu';
import { HeaderState } from '../../../header/domain/header-state';
import { MarcacoesService } from '../../marcacoes/service/marcacoes.service';
import { WorkerWithClockPunch } from '../../marcacoes/marcacoes-busca/domain/worker-with-clock-punch';
import { Worker } from '../../funcionarios/domain/funcionario';

@Component({
  selector: 'app-horas-trabalhadas',
  templateUrl: './horas-trabalhadas.component.html',
  styleUrls: ['./horas-trabalhadas.component.scss'],
})
export class HorasTrabalhadasComponent implements OnInit {
  public titleIcon: FooterSectionMenu = FooterSectionMenu.REPORT;
  public workers: Array<Worker> = [];
  public onReportMode: boolean = false;
  public hourQuantity: string = '';
  public foundWorker: Worker = new Worker(0, '', '', '', '', '');

  constructor(
    private screenHandlerService: ScreenHandlerService,
    private marcacoesService: MarcacoesService,
    private funcionariosService: FuncionariosService
  ) {}

  ngOnInit(): void {
    this.screenHandlerService.setHeaderStateAs(HeaderState.FEATURE_STATE);
    this.screenHandlerService.setFooterVisibilityAs(false);
    this.funcionariosService
      .getWorkersWithClockPunches()
      .then(
        (workers) =>
          (this.workers = workers.map(
            (worker) =>
              new Worker(
                worker.id,
                worker.name,
                worker.department,
                worker.workShift,
                worker.phone,
                worker.emailAddress
              )
          ))
      );
  }

  public getWorker(worker: Worker): void {
    this.marcacoesService.calculateHours(worker).then((result) => {
      this.foundWorker = worker;
      this.hourQuantity = Math.floor(result / (1000 * 60 * 60)).toString();
      this.onReportMode = true;
    });
  }
}
