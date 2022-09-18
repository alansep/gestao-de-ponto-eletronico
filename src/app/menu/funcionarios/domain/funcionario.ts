export class Funcionario {
  private _id: number;

  private _nome: string;

  private _departamento: string;

  private _turno: string;

  private _telefone: string;

  private _email: string;

  constructor(
    id: number,
    nome: string,
    departamento: string,
    turno: string,
    telefone: string,
    email: string
  ) {
    this._id = id;
    this._nome = nome;
    this._departamento = departamento;
    this._turno = turno;
    this._telefone = telefone;
    this._email = email;
  }

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }

  public get telefone(): string {
    return this._telefone;
  }
  public set telefone(value: string) {
    this._telefone = value;
  }

  public get turno(): string {
    return this._turno;
  }
  public set turno(value: string) {
    this._turno = value;
  }

  public get departamento(): string {
    return this._departamento;
  }
  public set departamento(value: string) {
    this._departamento = value;
  }

  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }
}
