import { Injectable } from '@angular/core';
import { User } from './../components/public/domain/user';
import { WebStorageService } from './web-storage/web-storage.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private webStorageService: WebStorageService) {}

  public getUsers(): Array<User> {
    let usersJson = this.webStorageService.readFromWebStorage('users');

    return usersJson === '' ? [] : JSON.parse(usersJson);
  }

  public saveUser(user: User): boolean {
    let users = this.getUsers();
    if (
      users.filter((savedUser) => savedUser.username === user.username).length == 0
    ) {
      users.push(user);
      this.webStorageService.saveOnWebStorage('users', JSON.stringify(users));
      return true;
    } else {
      return false;
    }
  }

  public authenticateUser(username: string, password: string): boolean {
    let users = this.getUsers();
    let filteredUsers = users.filter(user => user.username == username);

    if(filteredUsers.length != 1) {
      return false;
    }

    return filteredUsers[0].password === password;
  }
}
