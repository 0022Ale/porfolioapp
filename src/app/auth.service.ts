import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  url='http://localhost:3000/api';
  token!: string;

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    this.http.post(this.url + '/authenticate', {email: email, password: password}).subscribe((resp: any) => {
      this.router.navigate(['login']);
      localStorage.setItem('auth_token', resp.token);
    });
  }

  logout(): void{
    localStorage.removeItem('token');
  }

  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
}
  }

