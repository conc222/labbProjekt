import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  email: string;
  password: string;
  error: string;
  isLoggedin: boolean;
  User: string;

  constructor(private authService: AuthService, private router: Router) {
  }
  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.router.navigate(['/']);
      }
    });
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLoggedin = true;
        this.User = auth.email;
      } else {
        this.isLoggedin = false;
      }
    });
  }
  onSubmit() {
    this.authService.Login(this.email, this.password)
      .then(res => {
        console.log(res);
        this.router.navigateByUrl('/addspelare');
      })
      .catch(err => {
        this.error = err;
      });
  }
}
