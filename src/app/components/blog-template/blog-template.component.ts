import { Component, Input, OnInit } from '@angular/core';
import blog from '../../models/blog.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-template.component.html',
})
export class BlogTemplateComponent implements OnInit {
  @Input() data: blog | undefined;
  ngOnInit(): void {
  }
}
