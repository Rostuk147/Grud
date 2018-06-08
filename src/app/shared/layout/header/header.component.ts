import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  date: Date = new Date();
  userName = '';

  constructor(
    private auth: AuthService,
    private route: Router
  ) { }

  ngOnInit() {
    this.userName = JSON.parse(window.localStorage.getItem('user'));
    console.log(this.userName.length);
  }

  onLogout() {
    this.auth.logOut();
    this.userName = null;
    this.route.navigate(['/login']);
  }

}
