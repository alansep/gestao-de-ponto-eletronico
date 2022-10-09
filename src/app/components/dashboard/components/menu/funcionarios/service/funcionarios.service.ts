import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { WorkerWithClockPunch } from '../../marcacoes/marcacoes-busca/domain/worker-with-clock-punch';
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

  public getWorker(id: number): Observable<Worker> {
    return this.client.getWorker(id);
  }
  public updateWorker(worker: Worker): Observable<Worker> {
    return this.client.updateWorker(worker);
  }

  public deleteWorker(id: number): Observable<void> {
    return this.client.deleteWorker(id);
  }

  public async getWorkersWithClockPunches(): Promise<
    Array<WorkerWithClockPunch>
  > {
    let workers = await firstValueFrom(
      this.client.getWorkersWithClockPunches()
    );
    return new Promise((resolve, reject) => {
      resolve(workers.filter((worker) => worker.clockPunches.length > 0));
    });
  }

  public async createWorker(worker: Worker): Promise<Worker> {
    let workers: Array<Worker> = await firstValueFrom(this.getWorkers());
    let mustCreate: boolean =
      workers.filter((existingWorker) => existingWorker.name === worker.name)
        .length === 0;

    let createdWorker: Worker | undefined = undefined;

    if (mustCreate) {
      createdWorker = await firstValueFrom(this.client.createWorker(worker));
    }

    return new Promise((resolve, reject) => {
      if (mustCreate) {
        resolve(createdWorker as Worker);
      } else {
        reject('Usuário já existente!');
      }
    });
  }
}
