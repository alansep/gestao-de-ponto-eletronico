import { User } from './../public/domain/user';
import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouteAuthGuardService } from 'src/app/shared-services/route-auth-guard.service';
import { ScreenHandlerService } from 'src/app/shared-services/screen-handler/services/screen-handler.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit , AfterViewChecked {
  public isFooterVisible: boolean;
  public isHeaderVisible: boolean;
  public user: User = new User(0, '', '', '');

  constructor(
    private screenHandlerService: ScreenHandlerService,
    private cdr: ChangeDetectorRef,
    private routeAuthGuardService: RouteAuthGuardService
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


  ngOnInit(): void {
    this.user = this.routeAuthGuardService.getUser();
    console.log(this.user);

  }

}
