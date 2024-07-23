import { Component } from '@angular/core';
import { BlogCardComponent } from '../../components/partials/blog-card/blog-card.component';
import { HeaderComponent } from '../../components/partials/header/header.component';
import { BlogTemplateComponent } from '../../components/blog-template/blog-template.component';
import { RouterOutlet } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import blog from '../../models/blog.models';


@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [HeaderComponent, BlogCardComponent, BlogTemplateComponent, RouterOutlet],
  templateUrl: './blog.component.html',
})
export class BlogComponent {
  blog: blog | undefined;
  id: string | null;

  constructor(private dataService: DataService, private aRoute: ActivatedRoute) {
    this.id = this.aRoute.snapshot.paramMap.get('id');
    this.fetchBlog()
  }

  async fetchBlog() {
    const response = await  this.dataService.getAll(`blogs/${this.id}`);
    this.blog = response.data.blog;
  }
}
