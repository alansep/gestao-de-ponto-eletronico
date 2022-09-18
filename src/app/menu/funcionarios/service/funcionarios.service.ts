import { firstValueFrom, Observable } from 'rxjs';
import { Funcionario } from '../domain/funcionario';
import { Injectable } from '@angular/core';
import { FuncionariosClient } from './funcionarios-client.service';

@Injectable({
  providedIn: 'root',
})
export class FuncionariosService {
  constructor(private client: FuncionariosClient) {}

  public buscarFuncionarios(): Observable<Array<Funcionario>> {
    return this.client.buscarFuncionarios();
  }

}
