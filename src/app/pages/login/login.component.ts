import { Component } from '@angular/core';
import { TokenService } from '../../services/token.service';
import userCredentials from '../../models/userCredentials.models';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {

  userData: userCredentials = {
    email: '',
    password: ''
  }

  error: string = "";

  constructor(private tokenService: TokenService, private route: Router) { }

  async login() {
    let response = await this.tokenService.login(this.userData.email, this.userData.password)
    if (response.success === false) {
      this.error = response.errors
    } else {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user_id', response.data.user_id);
      window.location.href = '/blogs'
    }
  }
}
