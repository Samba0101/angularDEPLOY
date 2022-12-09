import { Component, OnInit } from '@angular/core';
import { PdfGeneratorService } from 'src/app/service/pdf-generator.service';
//import { saveAs } from 'file-saver';

@Component({
  selector: 'app-pdf-generator',
  templateUrl: './pdf-generator.component.html',
  styleUrls: ['./pdf-generator.component.css']
})
export class PdfGeneratorComponent implements OnInit {
  constructor(private pdfGeneratorService : PdfGeneratorService ) {
  }

  downloadFile(filename: string): void {
    this.pdfGeneratorService
      .download(filename)
     // .subscribe(blob => saveAs(blob, filename));
  }

  ngOnInit(): void {
  }

}


