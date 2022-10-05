import { ResourceConfig } from './resource-config';
import { User } from './../../components/public/domain/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserPromiseService {

  constructor(private httpClient: HttpClient) { }

  public getUsers(): Promise<Array<User>>{
    return this.httpClient.get<Array<User>>(ResourceConfig.getHost() + '/usuarios').toPromise() as Promise<Array<User>>;
  }

  public saveUser(user: User): Promise<User> {
    return this.httpClient.post<User>(ResourceConfig.getHost() + '/usuarios', user).toPromise() as Promise<User>;
  }


}
