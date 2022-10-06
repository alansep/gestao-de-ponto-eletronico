import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApplicationRoutes } from 'src/app/shared-services/application-routes';
import { HeaderState } from '../../header/domain/header-state';
import { ScreenHandlerService } from 'src/app/shared-services/screen-handler/services/screen-handler.service';

@Component({
  selector: 'app-marcacoes',
  templateUrl: './marcacoes.component.html',
  styleUrls: ['./marcacoes.component.scss']
})
export class MarcacoesComponent implements OnInit {

  constructor(private router: Router, private screenHandlerService: ScreenHandlerService) {}

  ngOnInit(): void {
    this.screenHandlerService.setHeaderStateAs(HeaderState.HOME_STATE);
    this.screenHandlerService.setFooterVisibilityAs(true);
  }
  public goToWorkerClockRegisteringPage(): void {
    this.router.navigate([ApplicationRoutes.DASHBOARD, ApplicationRoutes.MARCACOES, ApplicationRoutes.REGISTRO]);
  }
}
