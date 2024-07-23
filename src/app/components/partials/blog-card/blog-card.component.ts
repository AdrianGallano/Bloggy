import { Component, Input  } from '@angular/core';
import { RouterModule } from '@angular/router';
import blog from '../../../models/blog.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './blog-card.component.html',
})
export class BlogCardComponent {
  @Input() data!: blog;
  user_id = localStorage.getItem('user_id');
  ngOnInit() { 
  }
}
