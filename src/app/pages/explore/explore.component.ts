import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/partials/header/header.component';
import { BlogCardComponent } from '../../components/partials/blog-card/blog-card.component';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [HeaderComponent, BlogCardComponent],
  templateUrl: './explore.component.html',
})
export class ExploreComponent {

}
