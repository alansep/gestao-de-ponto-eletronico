import { ApplicationRoutes } from './../../../../../shared-services/application-routes';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenHandlerService } from 'src/app/shared-services/screen-handler/services/screen-handler.service';
import { HeaderState } from './../../header/domain/header-state';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss'],
})
export class FuncionariosComponent implements OnInit {
  constructor(
    private screenHandlerService: ScreenHandlerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.screenHandlerService.setFooterVisibilityAs(true);
    this.screenHandlerService.setHeaderStateAs(HeaderState.HOME_STATE);
  }

  public goToWorkerSearchPage(): void {
    this.router.navigate([ApplicationRoutes.DASHBOARD, ApplicationRoutes.FUNCIONARIOS, ApplicationRoutes.BUSCA]);
  }
}
