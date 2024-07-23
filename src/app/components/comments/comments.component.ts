import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../../services/data.service';
import comment from '../../models/comment.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comments.component.html',
})
export class CommentsComponent implements OnInit, OnChanges {
  @Input() blog_id: number | undefined;
  comments: Array<comment> | undefined = []
  user_id: string | null = localStorage.getItem('user_id')
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchComments()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['blog_id'] && this.blog_id) {
    this.fetchComments()
    }
  }
  
  createComment() {

  }

  async fetchComments() {
    try {
      const response = await this.dataService.getAll(`users/blogs/comments?blog_id=${this.blog_id}`);
      this.comments = response.data.userBlogComment;
      console.log(response)
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      } else {
        console.log("Unknown error occured.")
      }
    }
  }
}
