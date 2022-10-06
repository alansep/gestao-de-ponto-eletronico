import { Component, OnInit } from '@angular/core';
import { ActivationStart, Router } from '@angular/router';
import { FooterSection } from './domain/footer-section';
import { FooterSectionMenu } from './domain/footer-section-menu';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  private footerSection: FooterSection;

  constructor(private router: Router) {
    this.footerSection = new FooterSection();
  }

  ngOnInit(): void {
    this.changeSelectedMenu(this.router.url.split('/')[2]);

    this.router.events.subscribe((data) => {
      if (data instanceof ActivationStart) {
        let rootPath: string = data.snapshot.url.map((path) => path.path)[0];
        switch (rootPath) {
          case 'inicio':
            this.selectMenuAsEnabled(FooterSectionMenu.HOME);
            break;
          case 'funcionarios':
            this.selectMenuAsEnabled(FooterSectionMenu.WORKER);
            break;
          case 'marcacoes':
            this.selectMenuAsEnabled(FooterSectionMenu.CLOCK);
            break;
          case 'relatorios':
            this.selectMenuAsEnabled(FooterSectionMenu.REPORT);
            break;
        }
      }
    });
  }

  public selectMenu(menu: FooterSectionMenu): void {
    this.footerSection.changeFooterSelectedMenuTo(menu, this.router);
  }

  public selectMenuAsEnabled(menu: FooterSectionMenu): void {
    this.footerSection.changeFooterSelectedMenuStatusToEnable(menu);
  }

  public getSelectedMenu(): FooterSectionMenu {
    return this.footerSection.getSelectedMenu();
  }

  private changeSelectedMenu(menu: string) {
    switch (menu) {
      case 'inicio':
        this.selectMenuAsEnabled(FooterSectionMenu.HOME);
        break;
      case 'funcionarios':
        this.selectMenuAsEnabled(FooterSectionMenu.WORKER);
        break;
      case 'marcacoes':
        this.selectMenuAsEnabled(FooterSectionMenu.CLOCK);
        break;
      case 'relatorios':
        this.selectMenuAsEnabled(FooterSectionMenu.REPORT);
        break;
    }
  }
}
