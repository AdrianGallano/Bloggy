import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/partials/header/header.component';
import { DataService } from '../../services/data.service';
import user from '../../models/user.models';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  user: user | undefined;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.fetchUser();
  }


  async fetchUser() {
    try {
      const response = await this.dataService.get("users", localStorage.getItem('user_id'));
      this.user = response.data.user;
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      } else {
        console.log("Unknown error occured.")
      }
    }
  }
}
