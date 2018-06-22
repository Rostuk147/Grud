import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Validators, FormControl, FormGroup } from '@angular/forms';
import {Post} from "../../shared/models/post.model";
import {PostService} from "../../shared/service/post.service";
import {Title} from "@angular/platform-browser";
import {MatDialog} from "@angular/material";
import {DialogOverviewExampleDialogComponent} from "../dialog-overview-example-dialog/dialog-overview-example-dialog.component";
import {DialogDeleteComponent} from "../dialog-delete/dialog-delete.component";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})


export class CatalogComponent implements OnInit {
  form: FormGroup;
  posts: Post[] ;
  searchName = '';
  selected = '';
  page: number = 1;

  constructor(
    public dialog: MatDialog,
    private service: PostService,
    private title: Title,

    private router: Router
  ) {
    title.setTitle('System');
  }

  openDialog(post): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '550px',
      data: {
        name: post.name,
        color: post.color,
        price: post.price,
        id: post.id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.fnGetPosts();
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
        posts: posts
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.fnGetPosts();
    });
  }

  fnGetPosts() {
    this.service.getPost()
    .subscribe(( post: Post[]) => {
      this.posts = post;
    });
  }

  ngOnInit() {
    this.fnGetPosts();

    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'color': new FormControl(null, [Validators.required]),
      'price': new FormControl(null, [Validators.required])
    });
  }

  onSubmit(){
    const formValue = this.form.value;
    this.service.addPost(formValue)
    .subscribe((post: any) => {
      this.posts.push(post);
    });
  }


  searchFilter = [
    {value: 'Price', viewValue: 'Price'},
    {value: 'Name', viewValue: 'Name'}
  ];

  priceFilter(itemA, itemB) {
    return itemA.price - itemB.price;
  }

  nameFilter(a, b) {
    if (a.name < b.name) { return -1; }
    if (a.name > b.name) { return 1; }
    return 0;
  }

  filterIteams(selected){
    if(selected === 'Price'){
      this.posts.sort(this.priceFilter);
    } else {
       this.posts.sort(this.nameFilter);
    }
  }
}
