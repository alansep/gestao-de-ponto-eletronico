import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../domain/funcionario';

@Injectable({
  providedIn: 'root',
})
export class FuncionariosClient {

  constructor(private http: HttpClient) {}

  public buscarFuncionarios(): Observable<Array<Funcionario>> {
    return this.http.get<Array<Funcionario>>('assets/data/funcionarios.json');
  }

}
