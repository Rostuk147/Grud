import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  date: Date = new Date();
  userName: string = '';

  constructor(
    private auth: AuthService,
    private route: Router
  ) { }

  ngOnInit() {
    this.userName = JSON.parse(window.localStorage.getItem('user'));
  }

  onLogout() {
    this.auth.logOut();
    this.route.navigate(['/login']);
  }

}
