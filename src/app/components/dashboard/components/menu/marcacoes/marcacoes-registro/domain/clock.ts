export class Clock {
  public id: number;
  public workerId: number;
  public time: Date;

  constructor(id: number, workerId: number, time: Date) {
    this.id = id;
    this.workerId = workerId;
    this.time = time;
  }
}
