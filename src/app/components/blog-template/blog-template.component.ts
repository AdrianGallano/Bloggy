import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import blog from '../../models/blog.models';
import { CommonModule } from '@angular/common';
import user from '../../models/user.models';
import { DataService } from '../../services/data.service';
import { CommentsComponent } from '../comments/comments.component';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-template',
  standalone: true,
  imports: [CommonModule, CommentsComponent],
  templateUrl: './blog-template.component.html',
})
export class BlogTemplateComponent implements OnInit, OnChanges {
  @Input() data: blog | undefined;
  webContent: SafeHtml | undefined;
  user: user | undefined;

  constructor(private dataService: DataService, private sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data) {
      this.fetchUser();
    }
    
    if (this.data != undefined && this.data["content"] != undefined) {
      this.webContent = this.sanitizer.bypassSecurityTrustHtml(this.data['content'])
      console.log("webContent", this.webContent)
    }
  }


  async fetchUser() {
    let user_id = this.data?.user_id
    if (user_id != null) {
      let response = await this.dataService.get("users", user_id);
      this.user = response.data.user;
    }
  }
}


