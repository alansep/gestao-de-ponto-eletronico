import { Router } from '@angular/router';
import { FuncionariosService } from './../../funcionarios/service/funcionarios.service';
import { Component, OnInit } from '@angular/core';
import { ScreenHandlerService } from 'src/app/shared-services/screen-handler/services/screen-handler.service';
import { HeaderState } from '../../../header/domain/header-state';
import { Worker } from '../../funcionarios/domain/funcionario';

@Component({
  selector: 'app-marcacoes-registro',
  templateUrl: './marcacoes-registro.component.html',
  styleUrls: ['./marcacoes-registro.component.scss'],
})
export class MarcacoesRegistroComponent implements OnInit {

  public workers : Array<Worker> = [];
  public selectedWorker: Worker = new Worker(0, '', '', '', '', '');

  public isOnConfirmation: boolean = false;
  public isOnSuccessMessage: boolean = false;

  constructor(private screenHandlerService: ScreenHandlerService, private funcionarioService: FuncionariosService, private router: Router) {}

  ngOnInit(): void {
    this.screenHandlerService.setHeaderStateAs(HeaderState.FEATURE_STATE);
    this.screenHandlerService.setFooterVisibilityAs(false);
    this.isOnConfirmation = false;
    this.funcionarioService.getWorkers().subscribe(result => this.workers = result);
  }

  public getWorker(worker: Worker): void {
    this.isOnConfirmation = true;
    this.selectedWorker = worker;
  }

  public punchClock(): void {
    this.isOnSuccessMessage = true;
    this.isOnConfirmation = false;
  }

  public hideSuccessMessage(): void {
    this.isOnSuccessMessage = false;
    this.isOnConfirmation = false;
    this.selectedWorker = new Worker(0, '', '', '', '', '');
    this.goToPreviousScreen();
  }

  public goToPreviousScreen(): void {
    let route = this.router.url.split('/');
    route.shift();
    route.pop();
    this.router.navigate(route);
  }

}
