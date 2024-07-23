import { HeaderComponent } from '../../components/partials/header/header.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import blog from '../../models/blog.models';
import { DataService } from '../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { BlogCardComponent } from '../../components/partials/blog-card/blog-card.component';
import { SearchComponent } from '../../components/partials/search/search.component';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [BlogCardComponent, HeaderComponent, RouterOutlet, CommonModule, SearchComponent],
  templateUrl: './explore.component.html',

})
export class ExploreComponent implements OnInit {
  blogs: Array<blog> = []

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.asyncfetchBlogs()
  }


  async asyncfetchBlogs(seachValue: string | null = null) {

    let fetchBlogsString = `blogs`

    if (seachValue) {
      fetchBlogsString += `?title=${seachValue}`
    }

    const response = await this.dataService.getAll(`${fetchBlogsString}`);
    this.blogs = response.data.blog;
  }

  searchBlog(searchValue: string) {
    this.asyncfetchBlogs(searchValue);
  }
}
