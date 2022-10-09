import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScreenHandlerService } from 'src/app/shared-services/screen-handler/services/screen-handler.service';
import { HeaderState } from '../../../header/domain/header-state';
import { FuncionariosService } from '../service/funcionarios.service';
import { Worker } from '../domain/funcionario';

@Component({
  selector: 'app-funcionario-detalhado',
  templateUrl: './funcionario-detail.component.html',
  styleUrls: ['./funcionario-detail.component.scss'],
})
export class FuncionarioDetalhadoComponent implements OnInit {
  public isFormBlocked: boolean = false;
  public lastWorkerId: number = 0;
  public isOnUpdatingConfirmationStep: boolean = false;
  public workerName: string = '';
  public isOnSuccessUpdatingMessage: boolean = false;
  public isOnDeletingConfirmationStep: boolean = false;
  public isOnSuccessDeletingMessage: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private service: FuncionariosService,
    private screenHandlerService: ScreenHandlerService,
    private router: Router
  ) {}

  public worker: Worker = new Worker(-1, '', '', '', '', '');

  ngOnInit(): void {
    this.screenHandlerService.setHeaderStateAs(HeaderState.FEATURE_STATE);
    this.screenHandlerService.setFooterVisibilityAs(false);

    this.route.paramMap.subscribe((params) => {
      this.lastWorkerId = Number(params.get('id'));
      this.service.getWorker(Number(params.get('id'))).subscribe((worker) => {
        this.worker = worker;
        this.workerName = worker.name;
      });
    });

    this.isFormBlocked = true;
  }

  public changeOperationMode(): void {
    if (this.isFormBlocked) {
      this.enableEditingMode();
    } else {
      this.disableEditingMode();
    }
  }

  public enableEditingMode(): void {
    this.screenHandlerService.setHeaderStateAs(HeaderState.UPDATE_STATE);
    this.isFormBlocked = false;
  }

  public disableEditingMode(): void {
    this.screenHandlerService.setHeaderStateAs(HeaderState.FEATURE_STATE);
    this.isFormBlocked = true;
    this.service
      .getWorker(this.lastWorkerId)
      .subscribe((worker) => {
        this.worker = worker;
        this.workerName = worker.name;
      });
  }

  public notifyUpdatingConfirmationStep(): void {
    this.isOnUpdatingConfirmationStep = true;
  }

  public updateWorker(): void {
    this.service.updateWorker(this.worker).subscribe((worker) => {
      this.isOnSuccessUpdatingMessage = true;
    });
  }

  public finishOperation(): void {
    let route = this.router.url.split('/');
    route.shift();
    route.pop();
    this.router.navigate(route);
  }

  public deleteWorker(): void {
    this.service.deleteWorker(this.worker.id).subscribe(() => this.isOnSuccessDeletingMessage = true);
  }
}
