import { ResourceConfig } from './../../../../../../shared-services/resources/resource-config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Worker } from '../domain/funcionario';

@Injectable({
  providedIn: 'root',
})
export class FuncionariosClient {
  constructor(private http: HttpClient) {}

  public getWorkers(): Observable<Array<Worker>> {
    return this.http.get<Array<Worker>>(ResourceConfig.getHost() + '/funcionarios');
  }
}
