import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PdfGeneratorService {
  baseUrl="http://localhost:8080/api";
  constructor(private http: HttpClient) {
  }

  download(file: string | undefined): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/files/${file}`, {
      responseType: 'blob'
    });
  }
}
