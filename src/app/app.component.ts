import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { ScreenHandlerService } from './screen-handler/services/screen-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewChecked {
  public isFooterVisible: boolean;
  public isHeaderVisible: boolean;

  constructor(
    private screenHandlerService: ScreenHandlerService,
    private cdr: ChangeDetectorRef
  ) {
    this.isFooterVisible = screenHandlerService.isFooterVisible;
    this.isHeaderVisible = screenHandlerService.isHeaderVisible;
  }
  ngAfterViewChecked(): void {
    this.screenHandlerService.footerVisibilityObservable.subscribe((result) => {
      this.isFooterVisible = result;
      this.cdr.detectChanges();
    });
    this.screenHandlerService.headerVisibilityObservable.subscribe(
      (result) => (this.isHeaderVisible = result)
    );
  }

  ngOnInit(): void {}
}
