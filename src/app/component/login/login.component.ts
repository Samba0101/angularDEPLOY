import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/model/client';
import { AuthentificationService } from 'src/app/service/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
 
  ngOnInit(): void {
///this.onLogin();

  }

  
  constructor(private router: Router,private authentificationService :AuthentificationService ) {

   }
   onLogin(data: any){
    
    this.authentificationService.login(data).subscribe(
      resp=>{
       // console.log(resp);
         //console.log(resp.headers.get('Authorization'));
         let jwt:any =resp.headers.get('Authorization');
         this.authentificationService.saveToken(jwt);

        // console.log(this.authentificationService.parseJWT(username));
         this.router.navigateByUrl("/listCategorie");
      },err=>{

      }
    )

    console.log(data);
   }
    }




