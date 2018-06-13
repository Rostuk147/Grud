import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {AuthIsLoggin} from "../../../auth/auth.isLoggin";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  date: Date = new Date();
  userName = '';


  constructor(
    private auth: AuthIsLoggin,
    private route: Router
  ) { }

  ngOnInit() {
    this.userName = JSON.parse(window.localStorage.getItem('user'));
  }

  onLogout() {
    this.auth.logOut();
    this.route.navigate(['/']);
  }

}
