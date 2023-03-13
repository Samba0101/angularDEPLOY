import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService  {
 
    
jwt !:string;
 public username !:string;
 role!:Array<string>;
  public baseUrl = 'http://192.168.0.105:8080';
  jwthelper: any;
  convertToUser_ !: false;
 

  constructor(private http: HttpClient) {


}

login(data: any) {

  return this.http.post(this.baseUrl  + '/login', data,{observe:'response'});
}

/*saveToken(jwt: string ) {
  localStorage.setItem('Token',jwt);
}*/
saveToken(jwt:string){
  localStorage.setItem('token',jwt);
  this.jwt=jwt;
  this.parseJWT();
}

/*loadToken() {
  this.jwt = localStorage.getItem('token');
  this.convertToUser_ = (localStorage.getItem('isconvert') == 'true');
  this.parseJWT();
}*/
parseJWT(){

  this.jwthelper =new JwtHelperService();
 let objJWT=this.jwthelper.decodeToken(this.jwt)
 //this.username=data["username"];
 this.username=objJWT.Obj;
 this.role=objJWT.role;
}
//this.username=data["usernam"];

isAdmin(){
return this.role.indexOf('ADMIN')>=0;
}
isUser(){
  return this.role.indexOf('USER')>=0;
  }
  isAuthenticated(){
    return this.role && (this.isAdmin() || this.isUser());
  }

  logout(){
    localStorage.removeItem('token');
    this.initParams();

  }
  initParams(){
    this.jwt!=undefined;
    this.username!=undefined;
    this.role!=undefined;
  }

}


