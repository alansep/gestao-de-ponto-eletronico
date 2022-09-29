import { ApplicationRoutes } from './../../../../../shared-services/application-routes';
import { FooterSectionController } from './footer-section-controller';
import { FooterSectionMenu } from './footer-section-menu';
import { FooterButton } from './footer-button';
import { Router } from '@angular/router';
export class FooterSection implements FooterSectionController {
  private homeButton: FooterButton;
  private workerButton: FooterButton;
  private clockButton: FooterButton;
  private reportButton: FooterButton;

  constructor() {
    this.homeButton = new FooterButton(true, FooterSectionMenu.HOME);
    this.workerButton = new FooterButton(false, FooterSectionMenu.WORKER);
    this.clockButton = new FooterButton(false, FooterSectionMenu.CLOCK);
    this.reportButton = new FooterButton(false, FooterSectionMenu.REPORT);
  }

  public getSelectedMenu(): FooterSectionMenu {
    if (this.homeButton.isEnabled) {
      return FooterSectionMenu.HOME;
    } else if (this.workerButton.isEnabled) {
      return FooterSectionMenu.WORKER;
    } else if (this.clockButton.isEnabled) {
      return FooterSectionMenu.CLOCK;
    } else {
      return FooterSectionMenu.REPORT;
    }
  }

  public changeFooterSelectedMenuStatusToEnable(menu: FooterSectionMenu): void {
    this.generateArrayOfButtons()
      .filter((button) => menu !== button.type)
      .forEach((button) => (button.enabled = false));

    this.generateArrayOfButtons().filter(
      (button) => button.type === menu
    )[0].enabled = true;
  }

  public changeFooterSelectedMenuTo(
    menu: FooterSectionMenu,
    router: Router
  ): void {
    this.changeFooterSelectedMenuStatusToEnable(menu);

    switch (menu) {
      case FooterSectionMenu.HOME:
        router.navigate([ApplicationRoutes.DASHBOARD, ApplicationRoutes.INICIO]);
        break;
      case FooterSectionMenu.WORKER:
        router.navigate([ApplicationRoutes.DASHBOARD, ApplicationRoutes.FUNCIONARIOS]);
        break;
      case FooterSectionMenu.CLOCK:
        router.navigate([ApplicationRoutes.DASHBOARD, ApplicationRoutes.MARCACOES]);
        break;
      case FooterSectionMenu.REPORT:
        router.navigate([ApplicationRoutes.DASHBOARD, ApplicationRoutes.RELATORIOS]);
        break;
    }
  }

  private generateArrayOfButtons(): Array<FooterButton> {
    return [
      this.homeButton,
      this.workerButton,
      this.clockButton,
      this.reportButton,
    ];
  }
}
