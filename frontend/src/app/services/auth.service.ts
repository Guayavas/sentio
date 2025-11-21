import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth';
  private currentUser: any = null;

  constructor(private http: HttpClient) {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        this.currentUser = JSON.parse(savedUser);
    }
  }

  login(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/login`, { email, password }).pipe(
        tap((res: any) => {
            this.currentUser = res;
            localStorage.setItem('currentUser', JSON.stringify(res));
        })
    );
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }

  getUserId() {
    return this.currentUser ? this.currentUser.id : null;
  }
}
