import { Component, Inject, Input, OnInit } from '@angular/core';
import { ClientService } from 'src/app/service/client.service';
//import { ToastrService } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
import {  FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/model/client';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddClientComponent } from '../add-client/add-client.component';



@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  client:Client =new Client();
  pageOfItems !: Array<any>;
  submitted: boolean = false;
  @Input('formControlName')
  formControlName!: string;
  @Input('ngDefaultModel')
  ngDefaultModel!: string;
  listData !: Client[];
  annonceClicked: any;
  closeResult !: string;
  mode = 'list';
  annonces: any;

 
 constructor(public clientService: ClientService,private router: Router,public fb: FormBuilder,private toastr :ToastrService, private matDialog :MatDialog ,@Inject(MAT_DIALOG_DATA) private _data :any,
 public dialogRef:MatDialogRef<AddClientComponent>,){}
 //public crudApi!: ClientService 

 
ngOnInit(){
 this.getData();  
}
onSubmit(){
  this.submitted= true;
  if(this.clientService.choixmenu=='A'){
    this.addData();
  }else{
   this.updateDatas();
  }
}
getData(){
  this.clientService.getAllClient().subscribe(
     response =>{this.clientService.listData = response;
      console.log(this.listData)
    }
  );
}
updateClient() {
  this.clientService.updateData(this.clientService.dataForm.value.id,this.clientService.dataForm.value)
  .subscribe(_data =>{
    this.dialogRef.close();
   this.clientService.getAllClient().subscribe(
     (      response: Client[])=>{this.clientService.listData =response;}
    );
    this.router.navigate(['/Clients']);
    });
}


removeData(id:number){
  if(window.confirm('Etes Vous sure de vouloir supprimer ce client')){
    this.clientService.deleteData(id).subscribe(_data =>{
      console.log(_data);
      this.toastr.warning('donné supprimer avec succés');
      this.getData();
    },
      (error) => console.log(error));
    }
}

onChangePage(pageOfItems: Array<any>) {
  // update current page of items
  this.pageOfItems = pageOfItems;
}
  updateDatas() {
    this.clientService.updateData(this.clientService.dataForm.value.id,this.clientService.dataForm.value)
    .subscribe(data =>{this.toastr.success('Modification faite avec succes');
    console.log(data);
    this.ResetForm()
  });
 }
  addData() {
    this.clientService.addClient(this.clientService.dataForm.value).subscribe(_data=> {
      this.toastr.success('validation faite avec succés');
      console.log(_data);
      this.clientService.getAllClient();
      this.ResetForm()
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


  selectData(items:Client){
   
    this.clientService.choixmenu="M";
    this.clientService.dataForm= this.fb.group(Object.assign({},items));
    console.log(items);
    const dialogConfig= new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.disableClose=true;
    dialogConfig.width="50%";
    dialogConfig.data=items;
    this.matDialog.open(AddClientComponent,dialogConfig.data);
   ((error: any) => console.log(error));
  }
}
