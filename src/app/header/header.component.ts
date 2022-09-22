import { ScreenHandlerService } from './../screen-handler/services/screen-handler.service';
import { HeaderService } from './service/header.service';
import { HeaderAction } from './domain/header-action';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeaderState } from './domain/header-state';
import { Router, ActivatedRoute, ActivationStart } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private state: HeaderState = HeaderState.HOME_STATE;
  private url: Array<string> = [];

  @Input()
  public nomeUsuario = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private screenHandlerService: ScreenHandlerService
  ) {
    screenHandlerService.headerStateObservable.subscribe(
      (result) => (this.state = result)
    );
  }

  ngOnInit(): void {
    this.router.events.subscribe((data) => {
      if (data instanceof ActivationStart) {
        this.url = data.snapshot.url.map((path) => path.path);
      }
    });
  }

  public isStateInHomeState(): boolean {
    return this.state === HeaderState.HOME_STATE;
  }

  public isStateInUpdateState(): boolean {
    return this.state === HeaderState.UPDATE_STATE;
  }

  public isStateInFeatureState(): boolean {
    return this.state === HeaderState.FEATURE_STATE;
  }

  public changeToHomeState(): void {
    this.state = HeaderState.HOME_STATE;
  }

  public changeToUpdateState(): void {
    this.state = HeaderState.UPDATE_STATE;
  }

  public changeToFeatureState(): void {
    this.state = HeaderState.FEATURE_STATE;
  }

  public voltarPagina(): void {
    let rotaMae = this.url;
    rotaMae.pop();
    this.router.navigate(rotaMae);
  }
}
