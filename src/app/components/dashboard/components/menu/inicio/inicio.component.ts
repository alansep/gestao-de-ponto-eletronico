import { MarcacoesService } from './../marcacoes/service/marcacoes.service';
import { Component, OnInit } from '@angular/core';
import { ScreenHandlerService } from 'src/app/shared-services/screen-handler/services/screen-handler.service';
import { HeaderState } from '../../header/domain/header-state';
import { FuncionariosService } from './../funcionarios/service/funcionarios.service';
import { Worker } from '../funcionarios/domain/funcionario';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  public numberOfWorkers: string = '';
  public numberOfClockPunches: string = '';
  public hoursOfWork: string = '0';

  constructor(
    private screenHandlerService: ScreenHandlerService,
    private funcionariosService: FuncionariosService,
    private marcacoesService: MarcacoesService
  ) {}

  ngOnInit(): void {
    this.screenHandlerService.setHeaderStateAs(HeaderState.HOME_STATE);
    this.screenHandlerService.setFooterVisibilityAs(true);
    this.funcionariosService
      .getWorkers()
      .subscribe((result) => (this.numberOfWorkers = result.length.toString()));
    this.marcacoesService
      .getClockPunches()
      .subscribe(
        (result) => (this.numberOfClockPunches = result.length.toString())
      );
    this.funcionariosService.getWorkersWithClockPunches().then((workers) => {
      workers.forEach((worker) => {
        this.marcacoesService
          .calculateHours(
            new Worker(
              worker.id,
              worker.name,
              worker.department,
              worker.workShift,
              worker.phone,
              worker.emailAddress
            )
          )
          .then((result) => {
            this.hoursOfWork = (Number(this.hoursOfWork) + Math.floor(result / (1000 * 60 * 60))).toString();
          });
      });
    });
  }
}
