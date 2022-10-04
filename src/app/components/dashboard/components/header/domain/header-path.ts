import { HeaderState } from './header-state';

export class HeaderPath {
  private _path: Array<string>;
  private _headerState: HeaderState;

  constructor(path: Array<string>, headerState: HeaderState) {
    this._path = path;
    this._headerState = headerState;
  }

  public get path(): Array<string> {
    return this._path;
  }
  public set path(value: Array<string>) {
    this._path = value;
  }
  public get headerState(): HeaderState {
    return this._headerState;
  }
  public set headerState(value: HeaderState) {
    this._headerState = value;
  }
}
