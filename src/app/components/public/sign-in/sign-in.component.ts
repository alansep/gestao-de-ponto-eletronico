import { RouteAuthGuardService } from './../../../shared-services/route-auth-guard.service';
import { UsersService } from './../../../shared-services/users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpDTO } from '../sign-up/domain/sign-up-dto';
import { User } from '../domain/user';
import { ApplicationRoutes } from 'src/app/shared-services/application-routes';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  public user: SignUpDTO;

  constructor(
    private router: Router,
    private routeAuthGuardService: RouteAuthGuardService
  ) {
    this.user = new SignUpDTO();
  }

  ngOnInit(): void {}

  public goToWelcomePage(): void {
    this.router.navigate(['']);
  }

  public authenticateUser(): void {
    if (
      this.routeAuthGuardService.authenticateUser(
        new User(this.user.name, this.user.username, this.user.password)
      )
    ) {
      this.router.navigate([ApplicationRoutes.DASHBOARD]);
    } else {
      window.alert('Usuário inválido!');
    }
  }
}
