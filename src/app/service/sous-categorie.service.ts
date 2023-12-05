import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { SousCategorie } from '../model/sous-categorie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SousCategorieService {
  //baseUrl="http://192.168.0.105:8080/api/SousCategories";
  private baseUrl: string = environment.baseUrl+'/api/SousCategories'

  choixmenu : string = 'A';
  public dataForm!: FormGroup;
  listData!: SousCategorie[];

  constructor(private http:HttpClient) { }


addSousCategorie(SousCategorie :SousCategorie): Observable<Object> {
  return this.http.post(`${this.baseUrl}`,SousCategorie);
}


updatedata(id: number,value:any): Observable<Object>{
  return this.http.put(`${this.baseUrl}/${id}`,value);
}

getData( id: number): Observable<Object>{
  return this.http.get(`${this.baseUrl}/${id}`);
}

deleteData(id: number): Observable<any>{
 return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text'});
}
getAll(): Observable<any>{
return this.http.get(`${this.baseUrl}`);
}

}
