import { FooterSectionController } from './footer-section-controller';
import { FooterSectionMenu } from './footer-section-menu';
import { FooterButton } from './footer-button';
export class FooterSection implements FooterSectionController {

  private botaoHome: FooterButton;
  private botaoFuncionarios: FooterButton;
  private botaoMarcacoes: FooterButton;
  private botaoRelatorios: FooterButton;

  constructor() {
    this.botaoHome = new FooterButton(true, FooterSectionMenu.HOME);
    this.botaoFuncionarios = new FooterButton(false, FooterSectionMenu.WORKER);
    this.botaoMarcacoes = new FooterButton(false, FooterSectionMenu.CLOCK);
    this.botaoRelatorios = new FooterButton(false, FooterSectionMenu.REPORT);
  }

  public getSelectedMenu(): FooterSectionMenu {
    if (this.botaoHome.isEnabled) {
      return FooterSectionMenu.HOME;
    } else if (this.botaoFuncionarios.isEnabled) {
      return FooterSectionMenu.WORKER;
    } else if (this.botaoMarcacoes.isEnabled) {
      return FooterSectionMenu.CLOCK;
    } else {
      return FooterSectionMenu.REPORT;
    }
  }

  public changeFooterSelectedMenuTo(menu: FooterSectionMenu): void {

    this.generateArrayOfButtons()
      .filter(button => menu !== button.type)
      .forEach(button => button.enabled = false);

    this.generateArrayOfButtons()
      .filter(button => button.type === menu)
      [0].enabled = true;

  }

  private generateArrayOfButtons() : Array<FooterButton> {
    return [this.botaoHome, this.botaoFuncionarios, this.botaoMarcacoes, this.botaoRelatorios];
  }

}
