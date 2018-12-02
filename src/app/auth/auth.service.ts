/* tslint-disable */
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: true };

@Injectable()
export class AuthService {

  serverLink = environment.serverLink;
  LoggedInUser = '';

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private http: HttpClient) { }

  public signIn(signInData: any): Observable<any> {
    const signInUrl = this.serverLink + 'signin';
    return this.http.post<any>(signInUrl, signInData, httpOptions);
  }

  public signUp(signUpData: any): Observable<any> {
    const signUpUrl = this.serverLink + 'signup';
    return this.http.post<any>(signUpUrl, signUpData, httpOptions);
  }

  public signOut(): Observable<any> {
    const signOutUrl = this.serverLink + 'signout';
    return this.http.get<any>(signOutUrl, httpOptions);
  }

}
