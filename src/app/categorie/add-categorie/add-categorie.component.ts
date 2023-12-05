import { Component, Inject, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {FormBuilder, FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { CategorieService } from 'src/app/service/categorie.service';
import { MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import { Data, Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Categorie } from 'src/app/model/categorie';


@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {
  categorie:Categorie =new Categorie();
  @Input()ngModel!:NgModel;
  @Input()control !: FormControl
  formGroup !:FormGroup 
  listData!:Categorie[];

  modifForm = this.fb.group({
    libelle:['',[Validators.required,Validators.maxLength(5)]],
    code:['',[Validators.required,Validators.maxLength(5)]],
  
   });
  
  submitted: boolean = false;

 
 constructor(public crudApi: CategorieService,public fb: FormBuilder ,public toastr :ToastrService,private router: Router,
  private matDialog :MatDialog ,@Inject(MAT_DIALOG_DATA) public data:any,
  public dialogRef:MatDialogRef<AddCategorieComponent>,){}
 
ngOnInit(){
if(this.crudApi.choixmenu=='A')
{
  this.infoForm();
}}
addData(){
  this.crudApi.addcategorie(this.crudApi.dataForm.value)
  .subscribe( _data =>{
    this.dialogRef.close();
    this.toastr.success('validation faite avec succés');
    this.crudApi.getAll().subscribe(
      response =>{this.crudApi.listData =response;}
      
      
    );
  //  this.router.navigate(['/Categories']);
    });
  }


onSubmit(){
 // this.submitted= true;
  if(this.crudApi.choixmenu=='A'){
  this.addData();
  }else{
  this.updateCategorie();
  }
}

updateCategorie() {
    this.crudApi.updateData(this.crudApi.dataForm.value.id,this.crudApi.dataForm.value)
   .subscribe(_data =>{
      this.dialogRef.close();
      this.toastr.success('validation faite avec succés');
      this.crudApi.getAll().subscribe(
     response=>{this.crudApi.listData =response;}
      );
     this.router.navigate(['/listCategories']);
      });
}
/*updateCategorie() {
  this.crudApi.updateData(this.crudApi.dataForm.value.id,this.crudApi.dataForm.value)
  .subscribe(_data =>{
    this.dialogRef.close();
   this.crudApi.getAll().subscribe(
      response=>{this.crudApi.listData =response;}
    );
   /// this.router.navigate(['/Categories']);
    });
}*/
ResetForm() {
  this.crudApi.dataForm.reset();
}

/*addCategorie(){
  /* this.crudApi.choixmenu="M";
     this.crudApi.dataForm= this.fb.group(Object.assign({},item));*/
   /*  const dialogConfig= new MatDialogConfig();
     dialogConfig.autoFocus=true;
     dialogConfig.disableClose=true;
     dialogConfig.width="50%";
     this.matDialog.open(AddCategorieComponent,dialogConfig);
 }*/



  infoForm() {
    this.crudApi.dataForm = this.fb.group({
      libelle:['',[Validators.required,Validators.maxLength(5)]],
      code:['',[Validators.required,Validators.maxLength(5)]],
    
     });
  }
  
   getData(){
    this.crudApi.getAll().subscribe(
      response =>{this.crudApi.listData = response;}
    );
  }




/* addCategorie(){
    //this.crudApi.choixmenu="M";
   // this.crudApi
    const dialogConfig= new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.disableClose=true;
    dialogConfig.width="50%";
    this.matDialog.open(AddCategorieComponent,dialogConfig);
    this.ResetForm();
  }*/
  removeData(id:number){
      if(window.confirm('Etes Vous sure de vouloir supprimer cette categorie')){
        this.crudApi.deleteData(this.crudApi.dataForm.value.id).subscribe(data =>{
          console.log(data);
          this.toastr.warning('donné supprimer avec succés');
          this.getData();
        },
        error => console.log(error));
      }
  }

 /* selectData(item :Categorie){
    this.crudApi.choixmenu="M";
    this.crudApi.dataForm= this.fb.group(Object.assign({},item));
    const dialogConfig= new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.disableClose=true;
    dialogConfig.width="50%";
    this.matDialog.open(AddCategorieComponent,dialogConfig);
  }*/
}

