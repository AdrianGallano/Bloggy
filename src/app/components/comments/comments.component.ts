import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../../services/data.service';
import comment from '../../models/comment.model';
import { CommonModule, FormStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comments.component.html',
})
export class CommentsComponent implements OnInit, OnChanges {
  @Input() blog_id: number | undefined;
  comments: Array<comment> | undefined = []
  user_id: string | null = localStorage.getItem('user_id')
  content = ""
  new_content: string | undefined = ""
  comment_id: number | undefined;
  isEditing: boolean = false;
  editing_comment_id: number | undefined;
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchComments()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['blog_id'] && this.blog_id) {
      this.fetchComments()
    }
  }


  async createComment() {
    try {
      const response = await this.dataService.create('comments', { content: this.content })
      this.comment_id = await response.data.comment.comment_id

      let commentData = {
        "comment_id": this.comment_id,
        "user_id": this.user_id,
        "blog_id": this.blog_id,
      }
      await this.dataService.create('users/blogs/comments', commentData)

      this.fetchComments()
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      } else {
        console.log("Unknown error occured.")
      }
    }
  }

  async deleteComment(comment_id: number | undefined) {
    try {
      console.log(comment_id)
      await this.dataService.delete("comments", comment_id)
      this.fetchComments()
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      } else {
        console.log("Unknown error occured)")
      }
    }
  }

  onEdit(comment_id: number | undefined){
    this.isEditing = true;
    this.editing_comment_id = comment_id;
    if(!this.comments) return

    for(let comment of this.comments){
      if(comment.comment_id == comment_id){
        this.new_content = comment.comment_content
      }
    }
    
  }

  async editComment(comment_id: number | undefined) {
    try{
      await this.dataService.update("comments", comment_id, { content: this.new_content })
      await this.fetchComments()
      this.onCancel()

    }catch(error){
      if(error instanceof Error){
        console.log(error.message)
      }else{
        console.log("Unknown error occured.")
      }
    }
  }

  onCancel() {
    this.isEditing = false;
    this.editing_comment_id = undefined;
    this.new_content = "";
  }


  async fetchComments() {
    try {
      const response = await this.dataService.getAll(`users/blogs/comments?blog_id=${this.blog_id}`);
      this.comments = response.data.userBlogComment;
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      } else {
        console.log("Unknown error occured.")
      }
    }
  }

  openDropdown(comment_id: number | undefined) {
    this.comment_id = comment_id
  }
}
