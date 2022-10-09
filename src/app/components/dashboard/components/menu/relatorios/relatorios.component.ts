import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ScreenHandlerService } from 'src/app/shared-services/screen-handler/services/screen-handler.service';
import { HeaderState } from '../../header/domain/header-state';
import { ApplicationRoutes } from 'src/app/shared-services/application-routes';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.scss'],
})
export class RelatoriosComponent implements OnInit {
  constructor(private screenHandlerService: ScreenHandlerService, private router: Router) {}

  ngOnInit(): void {
    this.screenHandlerService.setHeaderStateAs(HeaderState.HOME_STATE);
    this.screenHandlerService.setFooterVisibilityAs(true);
  }

  public navigateToPeriodReportPage(): void {
    this.router.navigate([
      ApplicationRoutes.DASHBOARD,
      ApplicationRoutes.RELATORIOS,
      ApplicationRoutes.PERIODO,
    ]);
  }

  public navigateTo(): void {

  }
}
