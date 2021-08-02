import { AuthService } from './../auth/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  constructor(
    private _authService: AuthService,
    private router: Router
  ) { }

  entrarComGoogle() {
    this._authService.entrarComGoogle()
    .then(() => this.router.navigateByUrl('home'))
  }

}
