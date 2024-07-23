import { Component, OnInit } from '@angular/core';
import { BlogCardComponent } from '../../components/partials/blog-card/blog-card.component';
import { HeaderComponent } from '../../components/partials/header/header.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import blog from '../../models/blog.models';
import { DataService } from '../../services/data.service';
import { RegisterPromptComponent } from '../../components/register-prompt/register-prompt.component';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [BlogCardComponent, HeaderComponent, RouterOutlet, CommonModule, RegisterPromptComponent],
  templateUrl: './blogs.component.html',
})


export class BlogsComponent implements OnInit {

  blogs: Array<blog> = []
  isAuthorized = localStorage.getItem('token') ? true : false;
  
  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.asyncfetchBlogs()
  }


  async asyncfetchBlogs() {
    let user_id = localStorage.getItem('user_id')
    const response = await this.dataService.getAll(`blogs?user_id=${user_id}`)
    this.blogs = response.data.blog
  }
}
