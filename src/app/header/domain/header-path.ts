import { HeaderState } from "./header-state";

export class HeaderPath {

  private _caminho: Array<string>;
  private _estadoDeCabecalho: HeaderState;

  constructor (caminho: Array<string>, estadoDeCabecalho: HeaderState) {
    this._caminho = caminho;
    this._estadoDeCabecalho = estadoDeCabecalho;
  }

  public get caminho(): Array<string> {
    return this._caminho;
  }
  public set caminho(value: Array<string>) {
    this._caminho = value;
  }
  public get estadoDeCabecalho(): HeaderState {
    return this._estadoDeCabecalho;
  }
  public set estadoDeCabecalho(value: HeaderState) {
    this._estadoDeCabecalho = value;
  }
}
