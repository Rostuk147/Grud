import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { PostService } from '../service/post.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.component.html',
  styleUrls: ['./dialog-overview-example-dialog.component.css']
})
export class DialogOverviewExampleDialogComponent implements OnInit {
  EditForm: FormGroup;
  constructor(
    private service: PostService,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder) { 
      this.EditForm = this.fb.group({
        name: [null],
        color: [null],
        id: [null],
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }


  Edit() {
      this.service.editPut(this.data.id, this.EditForm.value).subscribe( () => {
        this.dialogRef.close();
      });
  }

  ngOnInit() {
   
  }

}
