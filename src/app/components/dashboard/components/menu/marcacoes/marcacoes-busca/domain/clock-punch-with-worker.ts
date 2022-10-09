import { Worker } from "../../../funcionarios/domain/funcionario";

export class ClockPunchWithWorker {

  public worker: Worker;
  public id: number | undefined;
  public workerId: number;
  public time: Date;

  constructor(
    id: number | undefined,
    workerId: number,
    time: Date,
    worker: Worker
  ) {
    this.id = id;
    this.workerId = workerId;
    this.time = time;
    this.worker = worker;
  }
}
