import { Component, OnInit } from '@angular/core';
import {Post} from "../../shared/models/post.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../shared/service/post.service";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  form: FormGroup;
  posts: Post[] ;
  message:string = 'New Product was added!';
  action:string = 'Close';

  constructor(
    private service: PostService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {

    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'color': new FormControl(null, [Validators.required]),
      'price': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required])
    });

  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(this.message, this.action, {
      duration: 3000,
    });
    return;
  }

  onSubmit(){
    const formValue = this.form.value;
    this.service.addPost(formValue)
      .subscribe(() => {
        this.openSnackBar(this.message, this.action);
      });
  }



}
