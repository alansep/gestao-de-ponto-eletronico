import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Worker } from '../domain/funcionario';
import { FuncionariosClient } from './funcionarios-client.service';

@Injectable({
  providedIn: 'root',
})
export class FuncionariosService {
  constructor(private client: FuncionariosClient) {}

  public getWorkers(): Observable<Array<Worker>> {
    return this.client.getWorkers();
  }
}
