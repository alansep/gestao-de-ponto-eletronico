import { UserPromiseService } from './resources/user-promise.service';
import { Injectable } from '@angular/core';
import { User } from './../components/public/domain/user';
import { WebStorageService } from './web-storage/web-storage.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(
    private webStorageService: WebStorageService,
    private userPromiseService: UserPromiseService
  ) {}

  public async saveUser(user: User): Promise<User> {
    let foundUser: User;
    let createdUser: User;

    let userExists: boolean = false;

    try {
      foundUser = await this.getUser(user.username);
      userExists = true;
    } catch (err) {
      userExists = false;
    }

    if (!userExists) {
      createdUser = await this.userPromiseService.saveUser(user);
    }

    return new Promise((resolve, reject) => {
      if (!userExists) {
        resolve(createdUser);
      }
      reject('Usuário já existente!');
    });
  }

  public async signIn(username: string, password: string): Promise<boolean> {
    let users: Array<User> = await this.userPromiseService.getUsers();

    return new Promise((resolve) => {

      let filteredUsers = users.filter((user) => user.username === username);


      if (filteredUsers.length != 1) {
        resolve(false);
      }

      resolve(filteredUsers[0].password === password);
    });
  }

  public async getUser(username: string): Promise<User> {
    let users: Array<User> = await this.userPromiseService.getUsers();

    return new Promise((resolve, reject) => {
      const user = users.filter((user) => user.username === username)[0];
      if (user) {
        resolve(user);
      } else {
        reject('Usuário não encontrado');
      }
    });
  }
}
