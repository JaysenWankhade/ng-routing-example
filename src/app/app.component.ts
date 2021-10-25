import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'demo-routing-app';
  isLoggedIn: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private location: Location,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
    this.http.get<any>('http://localhost:5000/123').subscribe((info) => {
      console.log(info);
    });
  }

  login(): void {
    this.authService.setIsLoggedIn(true);
    this.router.navigateByUrl('/public');
  }

  logOut(): void {
    this.authService.setIsLoggedIn(false);
    this.router.navigateByUrl('/first');
  }

  goBack(): void {
    this.location.back();
  }

  goForward(): void {
    this.location.forward();
  }
}
