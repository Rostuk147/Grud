import { Component, OnInit } from '@angular/core';
import { PostService } from './service/post.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';

interface Post {
  name: string,
  color: string,
  id: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  posts: Post[] = [];
  postName:string = ''
  postColor:string = ''
  nameValidator;
  name: string = 'nameTest';
  colorValidator;
  searchName = ''

  constructor(
    public dialog: MatDialog,
    private service: PostService
  ) { }

  openDialog(post): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '550px',
      data: { 
        name: post.name,
        id: post.id,
        color: post.color
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.fnGetPosts();
    });
  }


  fnGetPosts() {
    this.service.getPost()
    .subscribe((post: Post[]) => {
      this.posts = post;
    })
  }
  
  ngOnInit() {
    this.fnGetPosts();

    this.nameValidator = new FormControl('', [
      Validators.required
    ]);

    this.colorValidator = new FormControl('', [
      Validators.required
    ]);
  }

  addNewPost() {
    this.service.addPost(this.postName, this.postColor)
    .subscribe((post: Post) => {
      this.posts.push(post);
    });
  }

  deletePost(post: Post){
    this.service.deletePost(post)
    .subscribe((data) => {
      this.posts = this.posts.filter(c => c.id !== post.id);
    });
  }


  
  

 


}
