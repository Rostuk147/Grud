import { Component, OnInit } from '@angular/core';
import {AuthIsLoggin} from "../../../auth/auth.isLoggin";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  message:string = 'You do not have permissions to view this page. Please Sign In';
  action:string = 'Close';


  constructor(
    private auth: AuthIsLoggin,
    private route: Router,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  onLogout() {
    this.auth.logOut();
    this.route.navigate(['/']);
  }

  openSnackBar(message: string, action: string) {
    if( !this.auth.isLoggedIn ){
      this.snackBar.open(this.message, this.action, {
        duration: 3000,
      });
    }
    return;
  }
}
