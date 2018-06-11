import { Component, Inject, Input} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogOverviewExampleDialogComponent } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { Post } from '../../shared/models/post.model';
import { PostService } from '../../shared/service/post.service';


@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent {
    constructor(
      private service: PostService,
      public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) {
    }

  posts: Post[];

  onNoClick(): void {
    this.dialogRef.close();
  }

  deletePost(data){
    this.posts = data.posts;
    const post = {
      name: data.name,
      color: data.color,
      id: data.id
    }

    this.service.deletePost(post)
    .subscribe((data) => {
      this.posts = this.posts.filter(c => c.id !== post.id);
      this.dialogRef.close();
    });
  }

}
