import { Worker } from "../../../funcionarios/domain/funcionario";
import { Clock } from "../../marcacoes-registro/domain/clock";

export class WorkerWithClockPunch extends Worker{

  public clockPunches: Array<Clock>;

  constructor(
    id: number,
    name: string,
    department: string,
    workShift: string,
    phone: string,
    emailAdress: string,
    clockPunches: Array<Clock>
  ) {
    super(id, name, department, workShift, phone, emailAdress);
    this.clockPunches = clockPunches;
  }

}
