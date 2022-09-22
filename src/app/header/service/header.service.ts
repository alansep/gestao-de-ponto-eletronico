import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HeaderState } from '../domain/header-state';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private headerStateObservable: Subject<HeaderState> = new Subject();

  constructor() {}

  public setHeaderStateAs(estado: HeaderState): void {
    this.headerStateObservable.next(estado);
  }

  public getHeaderStateObservable(): Observable<HeaderState> {
    return this.headerStateObservable;
  }
}
