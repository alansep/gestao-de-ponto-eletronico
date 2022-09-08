import { FooterSectionMenu } from './footer-section-menu';
export interface FooterSectionController {
  changeFooterSelectedMenuTo(menu: FooterSectionMenu): void;

  getSelectedMenu(): FooterSectionMenu;
}
