import { Component } from '@angular/core';
import { BlogCardComponent } from '../../components/partials/blog-card/blog-card.component';
import { HeaderComponent } from '../../components/partials/header/header.component';
import { BlogTemplateComponent } from '../../components/blog-template/blog-template.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [HeaderComponent, BlogCardComponent, BlogTemplateComponent, RouterOutlet],
  templateUrl: './blog.component.html',
})
export class BlogComponent {

}
