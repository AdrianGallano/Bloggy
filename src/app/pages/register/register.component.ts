import { Component } from '@angular/core';
import user from '../../models/user.models';
import { DataService } from '../../services/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import registerErrors from '../../models/registerErrors.models';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  userData: user = {
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
    status: 0
  };

  errors: registerErrors | undefined;
  constructor(private dataService: DataService) {

  }


  async register() {
    try {
      let response = await this.dataService.create('users', this.userData)
      if (response.success == false) {
        this.errors = response.errors
        console.log(this.errors)

      } else {
        window.location.href = '/login'
      }
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message)
      }
    }
  }
}
