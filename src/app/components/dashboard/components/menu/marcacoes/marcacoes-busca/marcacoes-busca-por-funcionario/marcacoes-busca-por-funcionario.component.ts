import { Router } from '@angular/router';
import { Clock } from './../../marcacoes-registro/domain/clock';
import { WorkerWithClockPunch } from './../domain/worker-with-clock-punch';
import { MarcacoesService } from './../../service/marcacoes.service';
import { FuncionariosService } from './../../../funcionarios/service/funcionarios.service';
import { Component, OnInit } from '@angular/core';
import { ScreenHandlerService } from 'src/app/shared-services/screen-handler/services/screen-handler.service';
import { FooterSectionMenu } from '../../../../footer/domain/footer-section-menu';
import { HeaderState } from '../../../../header/domain/header-state';
import { Worker } from '../../../funcionarios/domain/funcionario';
import { ApplicationRoutes } from 'src/app/shared-services/application-routes';

@Component({
  selector: 'app-marcacoes-busca-por-funcionario',
  templateUrl: './marcacoes-busca-por-funcionario.component.html',
  styleUrls: ['./marcacoes-busca-por-funcionario.component.scss'],
})
export class MarcacoesBuscaPorFuncionarioComponent implements OnInit {
  public titleIcon: FooterSectionMenu = FooterSectionMenu.CLOCK;
  public workers: Array<Worker> = [];
  public onSearchMode: boolean = true;
  public selectedWorker: WorkerWithClockPunch = new WorkerWithClockPunch(
    0,
    '',
    '',
    '',
    '',
    '',
    []
  );

  constructor(
    private screenHandlerService: ScreenHandlerService,
    private funcionarioService: FuncionariosService,
    private maracacoesService: MarcacoesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.screenHandlerService.setHeaderStateAs(HeaderState.FEATURE_STATE);
    this.screenHandlerService.setFooterVisibilityAs(false);

    this.funcionarioService
      .getWorkersWithClockPunches()
      .then((workers) => (this.workers = workers));
  }

  public getWorker(worker: Worker): void {
    this.maracacoesService.getClockPunchesBy(worker).subscribe((worker) => {
      this.selectedWorker = worker;
      this.onSearchMode = false;
    });
  }

  public openDetailedClockPunch(clockPunch: Clock): void {
    this.router.navigate([
      ApplicationRoutes.DASHBOARD,
      ApplicationRoutes.MARCACOES,
      ApplicationRoutes.BUSCA,
      clockPunch.id,
    ]);
  }
}
