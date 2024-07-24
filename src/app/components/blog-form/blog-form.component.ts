import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../partials/header/header.component';
import { BlogEditorComponent } from '../blog-editor/blog-editor.component';
import blog from '../../models/blog.models';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-blog-form',
  standalone: true,
  imports: [HeaderComponent, BlogEditorComponent, FormsModule],
  templateUrl: './blog-form.component.html',
})

export class BlogFormComponent implements OnInit {
  @ViewChild(BlogEditorComponent) blogEditor!: BlogEditorComponent;
  blogData: blog = {
    title: '',
    summary: '',
    content: '',
    user_id: null,
  }
  blog_id: string | null;
  is_editing: boolean = false;

  constructor(private dataService: DataService, private aRoute: ActivatedRoute) {
    this.blog_id = this.aRoute.snapshot.paramMap.get('id');

    if(this.blog_id != null){
      this.is_editing = true;
    }
  }
  
  ngOnInit(): void {
    this.fetchBlog();
  }

  async saveBlog() {
    this.blogData.content = this.blogEditor.getEditorContent()
    this.blogData.user_id = localStorage.getItem('user_id')

    try {
      if (!this.is_editing) {
        const response = await this.dataService.create("blogs", this.blogData)
      } else {
        const response = await this.dataService.update("blogs", this.blog_id, this.blogData)
      }
      window.location.href = `/blogs`
    } catch (error) {
      if (error instanceof Error) {
        console.log(error)
      } else {
        console.log("Unknown error occurred")
      }
    }
  }


  async fetchBlog() {
    try {
      if (this.blog_id != null) {
        const response = await this.dataService.get("blogs", this.blog_id)
        this.blogData.title = response.data.blog.title
        this.blogData.summary = response.data.blog.summary
        this.blogData.content = response.data.blog.content
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error)
      } else {
        console.log("Unknown error occurred")
      }
    }
  }

  goToBlogs(){
    window.location.href = "/blogs"
  }
}


