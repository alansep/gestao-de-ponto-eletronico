import { HeaderAction } from './domain/header-action';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeaderState } from './domain/header-state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private state: HeaderState = HeaderState.HOME_STATE;

  @Input()
  public nomeUsuario = '';

  @Output()
  public aoSelecionarBotao = new EventEmitter<HeaderAction>();

  constructor() { }

  ngOnInit(): void {
  }

  public isStateInHomeState(): boolean{
    return this.state === HeaderState.HOME_STATE;
  }

  public isStateInUpdateState(): boolean{
    return this.state === HeaderState.UPDATE_STATE;
  }

  public isStateInFeatureState(): boolean{
    return this.state === HeaderState.FEATURE_STATE;
  }

  public changeToHomeState(): void {
    this.state = HeaderState.HOME_STATE;
  }

  public changeToUpdateState(): void {
    this.state = HeaderState.UPDATE_STATE
  }

  public changeToFeatureState(): void {
    this.state = HeaderState.FEATURE_STATE;
  }

  private getActionByState(state: HeaderState): HeaderAction {
    switch(this.state){
      case HeaderState.HOME_STATE:
        return HeaderAction.LOGOUT;
        case HeaderState.FEATURE_STATE:
        return HeaderAction.BACK;
        case HeaderState.UPDATE_STATE:
        return HeaderAction.CANCEL_UPDATE;
    }
  }

  public performAction(): void {
    this.aoSelecionarBotao.emit(this.getActionByState(this.state));
  }

}
