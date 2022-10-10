import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { FooterSectionMenu } from './../../dashboard/components/footer/domain/footer-section-menu';

@Component({
  selector: 'app-operation-title',
  templateUrl: './operation-title.component.html',
  styleUrls: ['./operation-title.component.scss'],
})
export class OperationTitleComponent implements OnInit, OnChanges {
  @Input()
  public imageFrom: FooterSectionMenu = FooterSectionMenu.HOME;

  @Input()
  public text: string = '';

  public imagePath: string = '';

  constructor() {}

  ngOnInit(): void {
    this.defineImagePath(this.imageFrom);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.defineImagePath(this.imageFrom);
  }

  private defineImagePath(imageFrom: FooterSectionMenu): void {
    switch (imageFrom) {
      case FooterSectionMenu.HOME:
        this.imagePath = 'assets/icons/home-black-icon.png';
        break;
      case FooterSectionMenu.WORKER:
        this.imagePath = 'assets/icons/worker-black-icon.png';
        break;
      case FooterSectionMenu.CLOCK:
        this.imagePath = 'assets/icons/clock-black-icon.png';
        break;
      case FooterSectionMenu.REPORT:
        this.imagePath = 'assets/icons/report-black-icon.png';
        break;
    }
  }
}
