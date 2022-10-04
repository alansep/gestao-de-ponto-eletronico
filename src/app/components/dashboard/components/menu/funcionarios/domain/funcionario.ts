export class Worker {
  private _id: number;

  private _name: string;

  private _department: string;

  private _workShift: string;

  private _phone: string;

  private _emailAddress: string;

  constructor(
    id: number,
    name: string,
    department: string,
    workShift: string,
    phone: string,
    emailAdress: string
  ) {
    this._id = id;
    this._name = name;
    this._department = department;
    this._workShift = workShift;
    this._phone = phone;
    this._emailAddress = emailAdress;
  }

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  public get emailAddress(): string {
    return this._emailAddress;
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }

  public get phone(): string {
    return this._phone;
  }
  public set phone(value: string) {
    this._phone = value;
  }

  public get workShift(): string {
    return this._workShift;
  }
  public set workShift(value: string) {
    this._workShift = value;
  }

  public get department(): string {
    return this._department;
  }
  public set department(value: string) {
    this._department = value;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
}
