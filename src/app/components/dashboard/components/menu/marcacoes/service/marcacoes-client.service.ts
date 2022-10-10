import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResourceConfig } from 'src/app/shared-services/resources/resource-config';
import { Worker } from '../../funcionarios/domain/funcionario';
import { ClockPunchWithWorker } from './../marcacoes-busca/domain/clock-punch-with-worker';
import { WorkerWithClockPunch } from './../marcacoes-busca/domain/worker-with-clock-punch';
import { Clock } from './../marcacoes-registro/domain/clock';

@Injectable({
  providedIn: 'root',
})
export class MarcacoesClientService {
  constructor(private http: HttpClient) {}

  public punchClock(clockPunch: Clock): Observable<Clock> {
    return this.http.post<Clock>(
      ResourceConfig.getHost() + '/marcacoes',
      clockPunch
    );
  }

  public getClockPunches(): Observable<Array<ClockPunchWithWorker>> {
    return this.http.get<Array<ClockPunchWithWorker>>(
      ResourceConfig.getHost() + '/clockPunches?_expand=worker'
    );
  }

  public getClockPunch(clockPunchId: number): Observable<ClockPunchWithWorker> {
    return this.http.get<ClockPunchWithWorker>(
      ResourceConfig.getHost() +
        '/clockPunches/' +
        clockPunchId +
        '?_expand=worker'
    );
  }

  public getClockPunchesBy(worker: Worker): Observable<WorkerWithClockPunch> {
    return this.http.get<WorkerWithClockPunch>(ResourceConfig.getHost() + '/workers/' + worker.id + '?_embed=clockPunches');
  }
}
