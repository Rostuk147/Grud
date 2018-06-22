import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';
import { PostService } from '../../shared/service/post.service';
@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.component.html',
  styleUrls: ['./dialog-overview-example-dialog.component.css']
})
export class DialogOverviewExampleDialogComponent implements OnInit {
  form: FormGroup;
  constructor(
    private service: PostService,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.form = new FormGroup({
        'name': new FormControl(null, [Validators.required]),
        'color': new FormControl(null, [Validators.required ]),
        'price': new FormControl(null, [Validators.required ]),
        'description': new FormControl(null, [Validators.required ])
      })
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  Edit() {
      this.service.editPut(this.data.id, this.form.value).subscribe( () => {
        this.dialogRef.close();
      });
  }

  ngOnInit() {

  }

}
