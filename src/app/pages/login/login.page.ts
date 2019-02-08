import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  /** Redirect URL after signing in */
  redirect;

  /** Username */
  username: string;

  /** Password */
  password: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.redirect = this.route.snapshot.queryParams.redirect;
  }

  /**
   * Sign into the application through the API authentication endpoint.
   */
  signin() {
    this.authService.auth(this.username, this.password).subscribe(
      data => {
        // Redirect to URL upon success.
        this.router.navigateByUrl(this.redirect, { replaceUrl: true });
      },
      err => {
        // Intercept error to avoid looping back on login page from global
        // error handler.
        throw new Error('Authentication failed');
      }
    );
  }
}
