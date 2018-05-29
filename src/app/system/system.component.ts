import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PostService } from '../service/post.service';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Post } from '../models/post.model';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})

export class SystemComponent implements OnInit {
  form: FormGroup;
  posts: Post[] ;
  searchName = '';
  selected = '';
  page: number = 1;

  constructor(
    public dialog: MatDialog,
    private service: PostService,
    private title: Title
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

  fnGetPosts() {
    this.service.getPost()
    .subscribe(( post: Post[]) => {
      this.posts = post;
    })
  }
  
  ngOnInit() {
    this.fnGetPosts();

    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'color': new FormControl(null, [Validators.required]),
      'price': new FormControl(null, [Validators.required])
    })
  }

  onSubmit(){
    const formValue = this.form.value;
    this.service.addPost(formValue)
    .subscribe((post: any) => {
      this.posts.push(post);
    });
  }

  deletePost(post: Post){
    this.service.deletePost(post)
    .subscribe((data) => {
      this.posts = this.posts.filter(c => c.id !== post.id);
    });
  }


  searchFilter = [
    {value: 'Price', viewValue: 'Price'},
    {value: 'Name', viewValue: 'Name'}
  ];

  priceFilter(itemA, itemB) {
    return itemA.price - itemB.price;
  }

  nameFilter(a,b){
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
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
