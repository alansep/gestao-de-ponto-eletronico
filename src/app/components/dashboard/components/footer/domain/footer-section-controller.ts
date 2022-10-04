import { Router } from '@angular/router';
import { FooterSectionMenu } from './footer-section-menu';
export interface FooterSectionController {
  changeFooterSelectedMenuTo(menu: FooterSectionMenu, router: Router): void;

  getSelectedMenu(): FooterSectionMenu;
}
