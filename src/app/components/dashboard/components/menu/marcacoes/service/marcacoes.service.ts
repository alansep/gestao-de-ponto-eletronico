import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Worker } from '../../funcionarios/domain/funcionario';
import { ClockPunchWithWorker } from '../marcacoes-busca/domain/clock-punch-with-worker';
import { WorkerWithClockPunch } from '../marcacoes-busca/domain/worker-with-clock-punch';
import { Clock } from '../marcacoes-registro/domain/clock';
import { MarcacoesClientService } from './marcacoes-client.service';

@Injectable({
  providedIn: 'root',
})
export class MarcacoesService {
  constructor(private client: MarcacoesClientService) {}

  public punchClock(selectedWorker: Worker): Observable<Clock> {
    return this.client.punchClock(this.generateClockPunch(selectedWorker));
  }

  public getClockPunches(): Observable<Array<ClockPunchWithWorker>> {
    return this.client.getClockPunches();
  }

  public getClockPunch(clockPunchId: number): Observable<ClockPunchWithWorker> {
    return this.client.getClockPunch(clockPunchId);
  }

  public getClockPunchesBy(worker: Worker): Observable<WorkerWithClockPunch> {
    return this.client.getClockPunchesBy(worker);
  }

  public async getClockPunchesBetween(
    startDate: string,
    finalDate: string
  ): Promise<Array<ClockPunchWithWorker>> {
    const parsedStartDate: Date = new Date(startDate);
    const parsedFinalDate: Date = new Date(finalDate);

    let clockPunches: Array<ClockPunchWithWorker> = await firstValueFrom(
      this.getClockPunches()
    );

    return new Promise((resolve) => {
      resolve(
        clockPunches.filter(
          (clockPunch) =>
            new Date(clockPunch.time) >= parsedStartDate &&
            new Date(clockPunch.time) <= parsedFinalDate
        )
      );
    });
  }

  private generateClockPunch(selectedWorker: Worker): Clock {
    return new Clock(undefined, selectedWorker.id, new Date());
  }
}
