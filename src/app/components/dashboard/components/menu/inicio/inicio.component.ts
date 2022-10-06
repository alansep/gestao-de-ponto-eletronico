import { Component, OnInit } from '@angular/core';
import { ScreenHandlerService } from 'src/app/shared-services/screen-handler/services/screen-handler.service';
import { HeaderState } from '../../header/domain/header-state';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(private screenHandlerService: ScreenHandlerService) {}

  ngOnInit(): void {
    this.screenHandlerService.setHeaderStateAs(HeaderState.HOME_STATE);
    this.screenHandlerService.setFooterVisibilityAs(true);
  }
}
