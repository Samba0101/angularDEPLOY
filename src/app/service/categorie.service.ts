import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Categorie } from '../model/categorie';
import { AuthentificationService } from './authentification.service';
@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  [x: string]: any;
  baseUrl="http://192.168.0.109:8080/api/Categories";
  choixmenu : string = 'A';
  public dataForm!: FormGroup;
  listData!: Categorie[];
  jwt !:string;
 username !:string;
 role!:Array<string>;


  constructor(private http:HttpClient,private authentificationService:AuthentificationService) { }


addcategorie(Categorie :Categorie): Observable<Object> {
  let headers=new HttpHeaders({'authorization':'Bearer '+this.authentificationService.jwt})
  return this.http.post(`${this.baseUrl}`,Categorie,{headers:headers});
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
getAll(): Observable<any>{
  let headers=new HttpHeaders({'authorization':'Bearer '+this.authentificationService.jwt})
return this.http.get(`${this.baseUrl}`,{headers:headers});
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

