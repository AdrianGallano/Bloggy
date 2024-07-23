import { HeaderComponent } from '../../components/partials/header/header.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import blog from '../../models/blog.models';
import { DataService } from '../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { BlogCardComponent } from '../../components/partials/blog-card/blog-card.component';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [BlogCardComponent, HeaderComponent, RouterOutlet, CommonModule],
  templateUrl: './explore.component.html',

})
export class ExploreComponent implements OnInit {
  blogs: Array<blog> = []

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.asyncfetchBlogs()
  }


  async asyncfetchBlogs() {
    const response = await this.dataService.getAll('blogs')
    this.blogs = response.data.blog
  }
}
