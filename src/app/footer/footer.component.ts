import { FooterSectionMenu } from './domain/footer-section-menu';
import { Component, OnInit } from '@angular/core';
import { FooterSection } from './domain/footer-section';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  private footerSection: FooterSection;

  constructor() {
    this.footerSection = new FooterSection();
  }

  ngOnInit(): void {}

  public selectMenu(menu: FooterSectionMenu): void {
    this.footerSection.changeFooterSelectedMenuTo(menu);
  }

  public getSelectedMenu(): FooterSectionMenu {
    return this.footerSection.getSelectedMenu();
  }
}
