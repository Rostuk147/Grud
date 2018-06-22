import { Component, Inject, Input} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogOverviewExampleDialogComponent } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { Post } from '../../shared/models/post.model';
import { PostService } from '../../shared/service/post.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent {
    constructor(
      private service: PostService,
      private router: Router,
      public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) {
    }


  onNoClick(): void {
    this.dialogRef.close();
  }

  deletePost(data){
    const post = {
      id: data.id
    };
    this.service.deletePost(post)
    .subscribe((data) => {
      this.dialogRef.close();
      this.router.navigate(['/system/catalog'];
    });
  }

}
