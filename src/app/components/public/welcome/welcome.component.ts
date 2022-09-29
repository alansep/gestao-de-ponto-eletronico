import { RouteAuthGuardService } from './../../../shared-services/route-auth-guard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  constructor(private routeAuthGuardService: RouteAuthGuardService) {}

  ngOnInit(): void {
    this.routeAuthGuardService.authenticateUser();
    console.log(this.routeAuthGuardService.isUserAuthenticated());
  }
}
