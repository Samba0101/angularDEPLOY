import { Injectable } from '@angular/core';
///import { HttpClient } from '@angular/common/http';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Client } from '../model/client';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  [x: string]: any;
  baseUrl="http://192.168.1.44:8080/api/Clients";
  choixmenu : string = 'A';
  public dataForm!: FormGroup;
  listData!: Client[];
  jwt !:string;
 username !:string;
 role!:Array<string>;


  constructor(private http:HttpClient,private authentificationService:AuthentificationService) { }


addClient(client :Client): Observable<Object> {
  let headers=new HttpHeaders({'authorization':'Bearer '+this.authentificationService.jwt})
  return this.http.post(`${this.baseUrl}`,client,{headers:headers});
}
updateData(id: number,value:any): Observable<Object>{
  let headers=new HttpHeaders({'authorization':'Bearer '+this.authentificationService.jwt})
  return this.http.put(`${this.baseUrl}/${id}`,value,{headers:headers});
}

getData( id: number): Observable<Object>{
  let headers=new HttpHeaders({'authorization':'Bearer '+this.authentificationService.jwt})
  return this.http.get(`${this.baseUrl}/${id}`,{headers:headers});
}
deleteData(id: number): Observable<any>{
  let headers=new HttpHeaders({'authorization':'Bearer '+this.authentificationService.jwt})
 return this.http.delete(`${this.baseUrl}/${id}`,{headers:headers});
}
getAllClient(): Observable<any>{
  let headers=new HttpHeaders({'authorization':'Bearer '+this.authentificationService.jwt})
return this.http.get(`${this.baseUrl}`,{headers:headers});
}
/*: Observable<any>{
  let headers=new HttpHeaders({'authorization':'Bearer '+this.authentificationService.jwt})
return this.http.get(`${this.baseUrl}`,{headers:headers});
}*/
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


