import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from '../partials/header/header.component';
import { BlogEditorComponent } from '../blog-editor/blog-editor.component';
import blog from '../../models/blog.models';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-blog-form',
  standalone: true,
  imports: [HeaderComponent, BlogEditorComponent, FormsModule],
  templateUrl: './blog-form.component.html',
})
export class BlogFormComponent {
  @ViewChild(BlogEditorComponent) blogEditor!: BlogEditorComponent;
  blogData: blog = {
    title: '',
    summary: '',
    content: '',
    user_id: null,
  }

  constructor(private dataService: DataService) {
  }

  async saveBlog() {
    this.blogData.content = this.blogEditor.getEditorContent()
    this.blogData.user_id = localStorage.getItem('user_id')
    try {
      const response = await this.dataService.create("blogs", this.blogData)
      window.location.href = `/blogs`
    } catch (error) {
      if (error instanceof Error) {
        console.log(error)
      }else{
        console.log("Unknown error occurred")
      }
    }

  }

}

/* 
how to save this?


*/
