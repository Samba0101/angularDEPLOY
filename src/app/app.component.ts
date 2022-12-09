import { Component } from '@angular/core';
import { AuthentificationService } from './service/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cat-web';


  constructor(private authentificationService :AuthentificationService ) {

  }
  
  isAdmin(){
    return this.authentificationService.isAdmin();
   }
   isUser(){
    return this.authentificationService.isUser();
   }
   isAuthenticated(){
    return this.authentificationService.isAuthenticated();
   }
}

