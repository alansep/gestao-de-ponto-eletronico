export class SignUpDTO {
  public name: string;
  public username: string;
  public password: string;

  constructor() {
    this.name = '';
    this.username = '';
    this.password = '';
  }
}
