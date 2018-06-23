import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import {Post} from "../../shared/models/post.model";
import {PostService} from "../../shared/service/post.service";
import {Title} from "@angular/platform-browser";
import { delay } from 'rxjs/operators';

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
  canLoad:boolean = false;

  constructor(
    private service: PostService,
    private title: Title
  ) {
    title.setTitle('System');
  }


  ngOnInit() {
    // Just simulate long request on the server
      window.setTimeout(()=>{
        this.service.getPost()
          .subscribe(( post: Post[]) => {
          this.posts = post;
        });
        this.canLoad = true;
    }, 1000)
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
