import { Component, OnInit } from '@angular/core';
import {AuthIsLoggin} from "../../../auth/auth.isLoggin";
import {Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private auth: AuthIsLoggin,
    private route: Router
  ) { }

  ngOnInit() {
  }

  onLogout() {
    this.auth.logOut();
    this.route.navigate(['/']);
  }

}
