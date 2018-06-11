import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-description-post',
  templateUrl: './description-post.component.html',
  styleUrls: ['./description-post.component.css']
})
export class DescriptionPostComponent implements OnInit {


  id: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }

}
