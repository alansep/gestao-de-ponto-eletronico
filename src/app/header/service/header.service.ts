import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HeaderState } from '../domain/header-state';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private observableDeEstado: Subject<HeaderState> = new Subject();

  constructor(private router: Router) { }

  public definirEstado(estado: HeaderState): void {
    this.observableDeEstado.next(estado);
  }

  public buscarObservableDeEstadoAtualizacao(): Observable<HeaderState> {
    return this.observableDeEstado;
  }

}
