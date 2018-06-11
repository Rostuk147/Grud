import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import 'rxjs/add/operator/map';
import { Api } from '../api/api';

@Injectable()

export class AuthService extends Api{
  constructor(public http: HttpClient){
    super(http);
  }

  createNewUser(user: User){
    return this.post('users', user);
  }

  getUserByEmail(email){
    return this.get(`users?email=${email}`)
      .map((user) => user[0] ? user[0] : undefined);
  }
}
