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
  posts: Post[] = [] ;
  onlyFirstPost: Post[] = [];
  searchName = '';
  selected = '';
  canLoad:boolean = false;
  pageNumber = [];

  constructor(
    private service: PostService,
    private title: Title
  ) {
    title.setTitle('System');
  }


  ngOnInit() {
    // Just simulate long answer from server
      window.setTimeout(()=>{
        this.service.getPost()
          .subscribe(( post: Post[]) => {
          this.posts = post;
          this.posts.forEach((value,index)=>{
            if(index < 5 ){
              this.onlyFirstPost.push(value)
            } else{
              return false;
            }
          });
            this.createPage()
        });
        this.canLoad = true;
    }, 500)
  }



  createPage(){
    this.pageNumber.length = Math.ceil(this.posts.length / 5);
  }


  getPostOnSelecterPage(pageNumber){
    // Just simulate long answer from server
    this.canLoad = false;
    window.setTimeout(()=>{
      this.service.paginate(pageNumber)
        .subscribe((posts:Post[])=>{
          this.onlyFirstPost = posts;
          this.canLoad = true;
        })
    },500);
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
      this.onlyFirstPost.sort(this.priceFilter);
    } else {
       this.onlyFirstPost.sort(this.nameFilter);
    }
  }
}
