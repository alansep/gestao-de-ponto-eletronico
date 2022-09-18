import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  private observableDeEstado: Subject<boolean> = new Subject();

  constructor() { }

  public definirVisibilidadeComo(fatorDeVisibilidade: boolean): void {
    this.observableDeEstado.next(fatorDeVisibilidade);
  }

  public buscarObservableDeVisibilidade(): Observable<boolean> {
    return this.observableDeEstado;
  }



}
