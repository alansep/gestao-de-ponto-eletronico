import { ApplicationRoutes } from './../../../shared-services/application-routes';
import { Router } from '@angular/router';
import { RouteAuthGuardService } from './../../../shared-services/route-auth-guard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  public navigateToSignInPage(): void {
    this.router.navigate([ApplicationRoutes.SIGN_IN]);
  }


  public navigateToSignUpPage(): void {
    this.router.navigate([ApplicationRoutes.SIGN_UP]);
  }

}
