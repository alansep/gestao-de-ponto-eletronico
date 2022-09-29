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
    private router: Router
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

    console.log(userJson);

    const user: User = JSON.parse(userJson);

    return user.isAuthenticated;
  }

  public authenticateUser(): void {
    this.webStorageService.saveOnWebStorage(
      'user',
      JSON.stringify(new User('admin', 'admin'))
    );
  }
}
