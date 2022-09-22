import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderState } from './../../header/domain/header-state';
import { ScreenHandlerService } from './../../screen-handler/services/screen-handler.service';

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
    this.router.navigate(['funcionarios', 'busca']);
  }
}
