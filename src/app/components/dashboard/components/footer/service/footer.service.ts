import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  private footerStateObservable: Subject<boolean> = new Subject();

  constructor() {}

  public setVisibilityAs(fatorDeVisibilidade: boolean): void {
    this.footerStateObservable.next(fatorDeVisibilidade);
  }

  public buscarObservableDeVisibilidade(): Observable<boolean> {
    return this.footerStateObservable;
  }
}
