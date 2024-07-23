import { Component, OnInit } from '@angular/core';
import { BlogCardComponent } from '../../components/partials/blog-card/blog-card.component';
import { HeaderComponent } from '../../components/partials/header/header.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import blog from '../../models/blog.models';
import { DataService } from '../../services/data.service';
import { RegisterPromptComponent } from '../../components/register-prompt/register-prompt.component';
import { Router } from '@angular/router';
import { SearchComponent } from '../../components/partials/search/search.component';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [BlogCardComponent, HeaderComponent, RouterOutlet, CommonModule, RegisterPromptComponent, SearchComponent],
  templateUrl: './blogs.component.html',
})
export class BlogsComponent implements OnInit {
  blogs: Array<blog> = [];
  isAuthorized = localStorage.getItem('token') ? true : false;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.fetchBlogs();
  }

  async fetchBlogs(searchString: string | undefined = undefined) {
    let user_id = localStorage.getItem('user_id');
    if (user_id) {
      let fetchBlogsString = `blogs?user_id=${user_id}`

      if (searchString) {
        fetchBlogsString += `&title=${searchString}`
      }

      const response = await this.dataService.getAll(`${fetchBlogsString}`);
      this.blogs = response.data.blog;
    }
  }

  searchBlog(searchValue: string) {
    this.fetchBlogs(searchValue);
  }


  goToCreateBlog() {
    this.router.navigate(['/blogs/create']);
  }
}
