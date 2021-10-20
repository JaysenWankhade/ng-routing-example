import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn$ = new Subject<boolean>();
  isLoggedIn: boolean = false;

  constructor() {}

  setIsLoggedIn(value: boolean) {
    this.isLoggedIn = value;
    this.isLoggedIn$.next(value);
  }
}
