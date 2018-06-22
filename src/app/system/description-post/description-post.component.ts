import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../shared/service/post.service";
import {Post} from "../../shared/models/post.model";

@Component({
  selector: 'app-description-post',
  templateUrl: './description-post.component.html',
  styleUrls: ['./description-post.component.css']
})
export class DescriptionPostComponent implements OnInit {


  id: number;
  posts;
  constructor(private route: ActivatedRoute, private service: PostService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.service.getSinglePost(this.id)
      .subscribe(( post: Post[]) => {
          this.posts = post;
      });
  }
}
