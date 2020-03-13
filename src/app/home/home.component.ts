import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoggedin: boolean;
  User: string;
  constructor(private authService: AuthService, private router: Router) {
  }
  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLoggedin = true;
        this.User = auth.email;
      } else {
        this.isLoggedin = false;
      }
    });
  }
  onLogoutClick() {
    this.authService.logout();
  }
}
