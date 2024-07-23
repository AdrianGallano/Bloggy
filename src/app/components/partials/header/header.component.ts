import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProfileDropdownComponent } from '../profile-dropdown/profile-dropdown.component';
import { DataService } from '../../../services/data.service';
import user from '../../../models/user.models';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, ProfileDropdownComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() page!: string;
  isAuthorized: boolean = false;
  user: user | undefined;

  constructor(private dataService: DataService) {
    this.getUser()
    this.isAuthorized = localStorage.getItem('token') ? true : false;
  }

  ngOnInit() {
  }

  async getUser() {
    try {
      let user_id = localStorage.getItem('user_id')
      if (user_id != null) {
        let response = await this.dataService.get("users", user_id)
        this.user = response.data.user
      }
    } catch {
    }
  }

  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('user_id')
    this.isAuthorized = false
    // redirect
    window.location.href = '/home'
  }
}
