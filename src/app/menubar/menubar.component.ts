import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../service/authentification.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {

  constructor(private auth: AuthentificationService,private router:Router) { }

  ngOnInit() {
  }
  OnDeconnexion() {
    console.log("Deconnexion");
    this.auth.logout();
    this.router.navigateByUrl('/index');

  }

}
