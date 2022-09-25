import { FooterSectionMenu } from './footer-section-menu';
export class FooterButton {
  private _enabled;
  private _type: FooterSectionMenu;

  constructor(enabled: boolean, type: FooterSectionMenu) {
    this._enabled = enabled;
    this._type = type;
  }

  public get isEnabled() {
    return this._enabled;
  }

  public set enabled(status: boolean) {
    this._enabled = status;
  }

  public get type(): FooterSectionMenu {
    return this._type;
  }
}
