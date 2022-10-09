import { Router } from '@angular/router';
import { FuncionariosService } from './../service/funcionarios.service';
import { Worker } from './../domain/funcionario';
import { ScreenHandlerService } from './../../../../../../shared-services/screen-handler/services/screen-handler.service';
import { Component, OnInit } from '@angular/core';
import { HeaderState } from '../../../header/domain/header-state';

@Component({
  selector: 'app-funcionario-cadastro',
  templateUrl: './funcionario-cadastro.component.html',
  styleUrls: ['./funcionario-cadastro.component.scss'],
})
export class FuncionarioCadastroComponent implements OnInit {
  public worker: Worker = new Worker(0, '', '', '', '', '');
  public isOnSuccessMessage: boolean = false;

  constructor(private screenHandlerService: ScreenHandlerService, private service : FuncionariosService, private router: Router) {}

  ngOnInit(): void {
    this.screenHandlerService.setHeaderStateAs(HeaderState.FEATURE_STATE);
    this.screenHandlerService.setFooterVisibilityAs(false);
  }

  public saveWorker(): void {

    this.service.createWorker(this.worker).then(resolve => {
      this.isOnSuccessMessage = true;
    }, reject => {
      alert(reject);
    })

  }

  public finishOperation(): void {
    let route = this.router.url.split('/');
    route.shift();
    route.pop();
    this.router.navigate(route);
  }
}
