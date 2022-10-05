import { ApplicationRoutes } from 'src/app/shared-services/application-routes';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenHandlerService } from 'src/app/shared-services/screen-handler/services/screen-handler.service';
import { HeaderState } from '../../../header/domain/header-state';
import { Worker } from '../domain/funcionario';
import { FuncionariosService } from './../service/funcionarios.service';

@Component({
  selector: 'app-funcionarios-busca',
  templateUrl: './funcionarios-busca.component.html',
  styleUrls: ['./funcionarios-busca.component.scss'],
})
export class FuncionariosBuscaComponent implements OnInit {
  public workers: Array<Worker> = [];

  constructor(
    private service: FuncionariosService,
    private screenHandlerService: ScreenHandlerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getWorkers();
    this.screenHandlerService.setHeaderStateAs(HeaderState.FEATURE_STATE);
    this.screenHandlerService.setFooterVisibilityAs(false);
  }

  public getWorkers(): void {
    this.service.getWorkers().subscribe((result) => {
      this.workers = result.sort((firstWorker, secondWorker) =>
        firstWorker.name.localeCompare(secondWorker.name)
      );
    });
  }

  public findWorkerByName(name: string): void {
    this.service.getWorkers().subscribe((result) => {
      this.workers = result
        .filter((worker) =>
          worker.name.toUpperCase().includes(name.toLocaleUpperCase())
        )
        .sort((firstWorker, secondWorker) =>
          firstWorker.name.localeCompare(secondWorker.name)
        );
    });
  }

  public selectWorker(worker: Worker): void {
    this.router.navigate([
      ApplicationRoutes.DASHBOARD,
      ApplicationRoutes.FUNCIONARIOS,
      ApplicationRoutes.BUSCA,
      worker.id.toString(),
    ]);
  }
}
