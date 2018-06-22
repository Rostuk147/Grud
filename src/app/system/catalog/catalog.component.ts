import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import {Post} from "../../shared/models/post.model";
import {PostService} from "../../shared/service/post.service";
import {Title} from "@angular/platform-browser";


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
    private service: PostService,
    private title: Title
  ) {
    title.setTitle('System');
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
      'price': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required])
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
