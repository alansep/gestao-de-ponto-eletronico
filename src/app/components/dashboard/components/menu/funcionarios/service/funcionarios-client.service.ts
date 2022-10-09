import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Worker } from '../domain/funcionario';
import { ResourceConfig } from './../../../../../../shared-services/resources/resource-config';

@Injectable({
  providedIn: 'root',
})
export class FuncionariosClient {
  constructor(private http: HttpClient) {}

  public getWorkers(): Observable<Array<Worker>> {
    return this.http.get<Array<Worker>>(
      ResourceConfig.getHost() + '/funcionarios'
    );
  }

  public getWorker(id: number): Observable<Worker> {
    return this.http.get<Worker>(
      ResourceConfig.getHost() + '/funcionarios/' + id
    );
  }

  public updateWorker(worker: Worker): Observable<Worker> {
    return this.http.put<Worker>(
      ResourceConfig.getHost() + '/funcionarios/' + worker.id,
      worker
    );
  }

  public deleteWorker(id: number): Observable<void> {
    return this.http.delete<void>(
      ResourceConfig.getHost() + '/funcionarios/' + id
    );
  }
}
