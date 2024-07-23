import { Component } from '@angular/core';
import { BlogCardComponent } from '../../components/partials/blog-card/blog-card.component';
import { HeaderComponent } from '../../components/partials/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [BlogCardComponent, HeaderComponent, RouterOutlet],
  templateUrl: './blogs.component.html',
})

export class BlogsComponent {
  
}
