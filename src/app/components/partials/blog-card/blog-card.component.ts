import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import blog from '../../../models/blog.models';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './blog-card.component.html',
})
export class BlogCardComponent {
  @Input() data!: blog;
  user_id = localStorage.getItem('user_id');

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }

  async deleteBlog(blog_id: number | undefined) {
    if (blog_id) {
      try {
        await this.dataService.delete('blogs', blog_id);
        window.location.href = '/blogs'
      } catch (error) {
        console.error('Error deleting blog:', error);
      }
    } else {
      console.error('Blog ID is undefined');
    }
  }
}

