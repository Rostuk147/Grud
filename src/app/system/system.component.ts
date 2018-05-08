import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PostService } from '../service/post.service';
import { Validators, FormControl } from '@angular/forms';
import { DialogOverviewExampleDialogComponent } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';

interface Post {
  name: string,
  color: string,
  id: number
}

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})

export class SystemComponent implements OnInit {

  posts: Post[] = [];
  postName:string = '';
  postColor:string = '';
  postPrice:number;
  name: string = 'nameTest';
  nameValidator;
  colorValidator;
  priceValidator;
  searchName = '';
  selected = ''

  constructor(
    public dialog: MatDialog,
    private service: PostService
  ) { }


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

    this.priceValidator = new FormControl('', [
      Validators.required
    ]);
  }

  addNewPost() {
    this.service.addPost(this.postName, this.postColor, this.postPrice)
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
