import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken: any;
  user: any;

  constructor(private http: Http) { }

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-type','application/json');
    return this.http.post('http://localhost:3000/users/register', user, {headers:headers}).map(res=>res.json);
  }

  authenticationUser(user){
    let headers = new Headers();
    headers.append('Content-type','application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers}).map(res=>res.json);
  }

  storeUserData(token, user){
    localStorage.setItem('id_token');
    localStorage.setItem('user','JSON.stringify(user)');
    this.authToken = token;
    this.user = user;
  }

  logout(){
      this.authToken = null;
      this.user = null;
      localStorage.clear();
  }

  authenticateUser(user: { username: String; password: String; }) {
    throw new Error('Method not implemented.');
  }
  storeUserData(token: any, user: any) {
    throw new Error('Method not implemented.');
  }

}
