import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(
    private http: Http
  ) { }

  // Here is possible to subscribe to an observable
  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8000/users/register',
            user, { headers: headers }).map(res => res.json());
  }

  // Here is possible to subscribe to an observable
  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8000/users/authenticate',
            user, { headers: headers }).map(res => res.json());
  }

  // Here is possible to subscribe to an observable
  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout() {
    console.log('Here I am')
    this.authToken = null;
    this.user = null;
    localStorage.clear()
  }
}
