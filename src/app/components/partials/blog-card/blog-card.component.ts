import { Component, Input  } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './blog-card.component.html',
})
export class BlogCardComponent {
  @Input() id!: string;
  ngOnInit() { 
    console.log(this.id);
  }
}
