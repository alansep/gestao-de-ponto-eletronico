export class Clock {
  public id: number | undefined;
  public workerId: number;
  public time: Date;

  constructor(id: number | undefined, workerId: number, time: Date) {
    this.id = id;
    this.workerId = workerId;
    this.time = time;
  }
}
