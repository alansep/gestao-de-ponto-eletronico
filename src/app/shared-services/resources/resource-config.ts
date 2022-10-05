export class ResourceConfig {
  public static PROTOCOL: string = 'http';
  public static HOST: string = 'localhost';
  public static PORT: string = '3000';

  public static getHost(): string {
    return `${this.PROTOCOL}://${this.HOST}:${this.PORT}`;
  }

}
