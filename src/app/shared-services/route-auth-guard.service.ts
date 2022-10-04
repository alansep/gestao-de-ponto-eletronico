import { UsersService } from './users.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { User } from './../components/public/domain/user';
import { WebStorageService } from './web-storage/web-storage.service';

@Injectable({
  providedIn: 'root',
})
export class RouteAuthGuardService implements CanActivate {
  constructor(
    private webStorageService: WebStorageService,
    private router: Router,
    private usersService: UsersService
  ) {}

  canActivate(): boolean {
    const isUserAuthenticated = this.isUserAuthenticated();
    if (!isUserAuthenticated) {
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }

  public isUserAuthenticated(): boolean {
    const userJson = this.webStorageService.readFromWebStorage('user');

    if (userJson == '') {
      return false;
    }

    const user: User = JSON.parse(userJson);

    return user.isAuthenticated;
  }

  public getUser(): User {
    return JSON.parse(this.webStorageService.readFromWebStorage('user'));
  }

  public authenticateUser(user: User): boolean {
    if (this.usersService.authenticateUser(user.username, user.password)) {
      user.name = this.usersService.getUsers().filter(foundUser => foundUser.username === user.username)[0].name;
      this.webStorageService.saveOnWebStorage('user', JSON.stringify(user));
      return true;
    }
    return false;
  }

  public logout(): void {
    this.webStorageService.saveOnWebStorage('user', '');
  }
}
