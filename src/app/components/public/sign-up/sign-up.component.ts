import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../domain/user';
import { ApplicationRoutes } from './../../../shared-services/application-routes';
import { RouteAuthGuardService } from './../../../shared-services/route-auth-guard.service';
import { UsersService } from './../../../shared-services/users.service';
import { SignUpDTO } from './domain/sign-up-dto';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  public user: SignUpDTO;

  constructor(
    private router: Router,
    private routeAuthGuardService: RouteAuthGuardService,
    private usersService: UsersService
  ) {
    this.user = new SignUpDTO();
  }

  ngOnInit(): void {
    this.user = new SignUpDTO();
  }

  public goToWelcomePage(): void {
    this.router.navigate(['']);
  }

  public createUser(): void {
    let user = new User(0, this.user.name, this.user.username, this.user.password);
    this.usersService.saveUser(user).then(resolve => {
      this.routeAuthGuardService.authenticateUser(resolve).then(resolve => {
        this.router.navigate([ApplicationRoutes.DASHBOARD]);
      });
    }).catch(err => {
      window.alert(err);
    });
  }
}
