//import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../service/authentification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private toggleButton: any;
  private sidebarVisible: boolean;

  constructor(private auth:AuthentificationService,private router:Router) {
      this.sidebarVisible = false;
  }

  ngOnInit() {

  }
  sidebarOpen() {

  }
  sidebarClose() {

  }
  sidebarToggle() {

  }

  isDocumentation() {

  }

  isAuthentificated()
  {
    return this.auth.isAuthenticated();
  }
  OnDeconnexion() {
    console.log("Deconnexion");
    this.auth.logout();
    this.router.navigateByUrl('/index');

  }
}
