import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../shared/service/post.service";
import {Post} from "../../shared/models/post.model";
import {MatDialog} from "@angular/material";
import {DialogOverviewExampleDialogComponent} from "../dialog-overview-example-dialog/dialog-overview-example-dialog.component";
import {DialogDeleteComponent} from "../dialog-delete/dialog-delete.component";


@Component({
  selector: 'app-description-post',
  templateUrl: './description-post.component.html',
  styleUrls: ['./description-post.component.css']
})
export class DescriptionPostComponent implements OnInit {


  id: number;
  canLoad: boolean = false;
  post: Post[];
  constructor(private route: ActivatedRoute, private service: PostService, public dialog: MatDialog) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.fnGetPost();

  }

  fnGetPost(){
    this.service.getSinglePost(this.id)
      .subscribe(( post: Post[]) => {
        this.post = post;
        this.canLoad = true;
      });
  }

  openDialog(post): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '550px',
      data: {
        name: post.name,
        color: post.color,
        price: post.price,
        description: post.description,
        id: post.id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.fnGetPost();
    });
  }

  openDialogDelete(post, posts): void{
    let dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: '550px',
      data: {
        name: post.name,
        color: post.color,
        price: post.price,
        id: post.id,
        description: post.description,
        posts: posts
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.fnGetPost();
    });
  }



}
