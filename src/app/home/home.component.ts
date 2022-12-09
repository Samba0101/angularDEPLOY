
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthentificationService } from '../service/authentification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild(NavbarComponent, { static: false })
  navbar!: NavbarComponent;

  constructor(private auth: AuthentificationService, private router: Router) { }

  ngOnInit() {
  }

  isAuthentificated() {
    return this.auth.isAuthenticated();
  }
  OnDeconnexion() {
    console.log("Deconnexion");
    this.auth.logout();
    this.router.navigateByUrl('/index');

  }

}
