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

  async onUpload(event: Event) {
    const inAvatar = event.target as HTMLInputElement;
    const formData = new FormData()

    if (inAvatar.files && inAvatar.files[0]) {
      console.log(inAvatar.files[0])

      formData.append('image', inAvatar.files[0])
      formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });
      try {
        await this.dataService.upload(`users/${this.user?.user_id}/avatar`, formData)
        this.fetchUser()
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message)
        } else {
          console.log("Unknown error occured")
        }
      }
    }
  }



  async fetchUser() {
    try {
      const response = await this.dataService.get("users", localStorage.getItem('user_id'));
      this.user = response.data.user;
      console.log(this.user)

    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      } else {
        console.log("Unknown error occured.")
      }
    }
  }
}
