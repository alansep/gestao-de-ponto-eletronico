import { ScreenHandlerService } from './screen-handler/services/screen-handler.service';
import { HeaderService } from './header/service/header.service';
import { FooterService } from './footer/service/footer.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderAction } from './header/domain/header-action';
import { AfterContentInit, AfterViewChecked, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { HeaderState } from './header/domain/header-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewChecked {
  public isFooterVisible: boolean;
  public isHeaderVisible: boolean;

  constructor(private screenHandlerService: ScreenHandlerService, private cdr: ChangeDetectorRef) {
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

  ngOnInit(): void {

  }
}
