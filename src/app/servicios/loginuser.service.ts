import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/user';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {
  private baseUrl="http://localhost:8080/user/login";
  constructor(private httpClient: HttpClient) { }

  loginUser(user: User):Observable<objet> {
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}`, user);
}
}

