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
    const userJson: string = this.webStorageService.readFromWebStorage('user');
    return userJson != '';
  }

  public getUser(): User {
    return JSON.parse(this.webStorageService.readFromWebStorage('user'));
  }

  public async authenticateUser(user: User): Promise<boolean> {
    let result: boolean = await this.usersService.signIn(
      user.username,
      user.password
    );
    let foundUser: User = new User(0, '', '', '');

    if (result) {
      foundUser = await this.usersService.getUser(user.username);
    }

    return new Promise((resolve) => {
      if (result) {
        user.name = foundUser.name;
        this.webStorageService.saveOnWebStorage('user', JSON.stringify(user));
        resolve(true);
      } else {
        resolve(false);
      }
    });
  }

  public logout(): void {
    this.webStorageService.saveOnWebStorage('user', '');
  }
}
