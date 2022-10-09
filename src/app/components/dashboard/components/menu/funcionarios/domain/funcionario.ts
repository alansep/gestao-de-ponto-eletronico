export class Worker {
  public id: number;

  public name: string;

  public department: string;

  public workShift: string;

  public phone: string;

  public emailAddress: string;

  constructor(
    id: number,
    name: string,
    department: string,
    workShift: string,
    phone: string,
    emailAdress: string
  ) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.workShift = workShift;
    this.phone = phone;
    this.emailAddress = emailAdress;
  }
}
