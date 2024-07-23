import { Component, Input, OnInit } from '@angular/core';
import user from '../../../models/user.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-dropdown.component.html',
})
export class ProfileDropdownComponent implements OnInit {
  @Input() user: user | undefined;
  @Input() logoutCallback: Function | undefined;
  ngOnInit(): void {

  }
}
