import { FooterService } from './service/footer.service';
import { FooterSectionMenu } from './domain/footer-section-menu';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FooterSection } from './domain/footer-section';
import { ActivationStart, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  private footerSection: FooterSection;
  public isVisible: boolean = true;

  constructor(private router: Router, private footerService: FooterService) {
    this.footerSection = new FooterSection();
  }

  ngOnInit(): void {
    this.router.events.subscribe((data) => {
      if (data instanceof ActivationStart) {
        let caminhoPai: string = data.snapshot.url.map((path) => path.path)[0];
        switch (caminhoPai) {
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

      this.footerService
        .buscarObservableDeVisibilidade()
        .subscribe((result) => {
          if(result) {
            this.setFooterAsVisible();
          } else {
            this.setFooterAsInvisible();
          }
        });
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

  public setFooterAsVisible(): void {
    if(!this.isVisible){
      this.isVisible = true;
    }
  }

  public setFooterAsInvisible(): void {
    if(this.isVisible){
      this.isVisible = false;
    }
  }

}
