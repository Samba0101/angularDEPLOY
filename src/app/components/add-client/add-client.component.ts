import { Component, Inject, Input, OnInit } from '@angular/core';
import { ClientService } from 'src/app/service/client.service';
//import { ToastrService } from 'ngx-toastr';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
//import { MatDialogConfig } from '@angular/material/dialog';
import { Client } from 'src/app/model/client';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client:Client =new Client();
  pageOfItems !: Array<any>;
  submitted: boolean = false;
  @Input('formControlName')
  formControlName!: string;
  @Input('ngDefaultModel')
  ngDefaultModel!: string;
  formGroup !:FormGroup ;
  listData !: Client[];
  annonceClicked: any;
  closeResult !: string;
  mode = 'list';
  annonces: any;

 
 constructor(public clientService: ClientService,public fb: FormBuilder,private toastr :ToastrService, private matDialog :MatDialog ,@Inject(MAT_DIALOG_DATA) 
 public dialogRef:MatDialogRef<AddClientComponent>,){}
 //public crudApi!: ClientService 

 
ngOnInit(){
 if(this.clientService.choixmenu=='A')
{
    this.infoForm();
  }
}
getData(){
  this.clientService.getAllClient().subscribe(
     response =>{
      this.clientService.listData = response;
      console.log(this.listData)
    /*  headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })*/
    }
  );
}


onChangePage(pageOfItems: Array<any>) {
  // update current page of items
  this.pageOfItems = pageOfItems;
}

onSubmit(){
  if(this.clientService.choixmenu=='A'){
    this.addData();
    }else{
    this.updateDatas();
    }
}
  updateDatas() {
    this.clientService.updateData(this.clientService.dataForm.value.id,this.clientService.dataForm.value)
    .subscribe(data =>{this.toastr.success('Modification faite avec succes');
    console.log(data);
    this.ResetForm()
  });
 }
 addClient(){
  const dialogConfig= new MatDialogConfig();
  dialogConfig.autoFocus=true;
  dialogConfig.disableClose=true;
  dialogConfig.width="50%";
  this.matDialog.open(AddClientComponent,dialogConfig);
  this.ResetForm();

 // this.toastr.success('validation faite avec succés');
}
removeData(id:number){
  if(window.confirm('Etes Vous sure de vouloir supprimer ce client')){
    this.clientService.deleteData(id).subscribe(data =>{
      console.log(data);
      this.toastr.warning('donné supprimer avec succés');
      this.getData();
    },
      (error) => console.log(error));
    }
}

  addData() {
    this.clientService.addClient(this.clientService.dataForm.value).subscribe(data=> {
      this.toastr.success('validation faite avec succés');
      console.log(data)
      this.ResetForm();
      
    });
  }

  ResetForm() {
    this.clientService.dataForm.reset();
  }
  infoForm() {
    this.clientService.dataForm = this.fb.group({
      libelle:['',[Validators.required]],
      tel:['',[Validators.required,Validators.maxLength(8)]],
      email:['',[Validators.required,Validators.maxLength(10)]],
      contact:['',[Validators.required,Validators.maxLength(10)]],
      fax:['',[Validators.required,Validators.maxLength(8)]],
      login:['',[Validators.required,Validators.maxLength(8)]],
      pwd:['',[Validators.required,Validators.maxLength(8)]],
       
     });
  }


  selectData(item:Client){
   
    this.clientService.choixmenu="M";
    this.clientService.dataForm= this.fb.group(Object.assign({},item));
    console.log(item);
    const dialogConfig= new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.disableClose=true;
    dialogConfig.width="50%";
    dialogConfig.data=item;
    this.matDialog.open(AddClientComponent,dialogConfig);
   ((error: any) => console.log(error));
  }

}



