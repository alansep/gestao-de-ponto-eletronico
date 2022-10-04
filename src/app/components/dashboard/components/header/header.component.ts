import { RouteAuthGuardService } from './../../../../shared-services/route-auth-guard.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationStart, Router } from '@angular/router';
import { ScreenHandlerService } from 'src/app/shared-services/screen-handler/services/screen-handler.service';
import { HeaderState } from './domain/header-state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private headerState: HeaderState = HeaderState.HOME_STATE;
  private url: Array<string> = [];

  @Input()
  public userName = '';

  constructor(
    private router: Router,
    private screenHandlerService: ScreenHandlerService,
    private routeAuthGuardService: RouteAuthGuardService
  ) {
    this.screenHandlerService.headerStateObservable.subscribe(
      (result) => (this.headerState = result)
    );
  }

  ngOnInit(): void {
    this.router.events.subscribe((data) => {
      if (data instanceof ActivationStart) {
        this.url = data.snapshot.url.map((path) => path.path);
      }
    });
  }

  public isStateInHomeState(): boolean {
    return this.headerState === HeaderState.HOME_STATE;
  }

  public isStateInUpdateState(): boolean {
    return this.headerState === HeaderState.UPDATE_STATE;
  }

  public isStateInFeatureState(): boolean {
    return this.headerState === HeaderState.FEATURE_STATE;
  }

  public backToPreviousPage(): void {
    let rootPath = this.url;
    rootPath.pop();
    this.router.navigate(rootPath);
  }

  public backToWelcomePage(): void {
    this.routeAuthGuardService.logout();
    this.router.navigate([''])
  }
}
