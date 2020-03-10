import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  email: string;
  password: string;
  error: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.router.navigate(['/']);
      }
    });
  }

  onSubmit() {
    this.authService.Login(this.email, this.password)
      .then(res => {
        this.router.navigate(['/']);
      })
      .catch(err => {
        this.error = err;
      });
  }
}
