import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HeaderState } from './../../header/domain/header-state';

@Injectable({
  providedIn: 'root',
})
export class ScreenHandlerService {
  private _headerState: HeaderState = HeaderState.HOME_STATE;
  private _isFooterVisible: boolean = true;
  private _isHeaderVisible: boolean = true;

  private _headerStateSubject: Subject<HeaderState> = new Subject();

  private _footerVisibilitySubject: Subject<boolean> = new Subject();

  private _headerVisibilitySubject: Subject<boolean> = new Subject();

  constructor() {}

  public setFooterVisibilityAs(visibility: boolean): void {
    if (this.isFooterVisible != visibility) {
      this._isFooterVisible = visibility;
      this._footerVisibilitySubject.next(visibility);
    }
  }

  public setHeaderVisibilityAs(visibility: boolean): void {
    if (this.isHeaderVisible != visibility) {
      this._isHeaderVisible = visibility;
      this._headerVisibilitySubject.next(visibility);
    }
  }

  public setHeaderStateAs(state: HeaderState): void {
    if (this.headerState != state) {
      this._headerState = state;
      this.setHeaderVisibilityAs(true);
      this._headerStateSubject.next(state);
    }
  }

  public get headerStateObservable(): Observable<HeaderState> {
    return this._headerStateSubject;
  }

  public get footerVisibilityObservable(): Observable<boolean> {
    return this._footerVisibilitySubject;
  }

  public get headerVisibilityObservable(): Observable<boolean> {
    return this._headerVisibilitySubject;
  }
  public get headerState(): HeaderState {
    return this._headerState;
  }
  public get isFooterVisible(): boolean {
    return this._isFooterVisible;
  }
  public get isHeaderVisible(): boolean {
    return this._isHeaderVisible;
  }
}
