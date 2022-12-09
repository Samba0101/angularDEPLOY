import { Component, Inject, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategorieService } from 'src/app/service/categorie.service';
import { MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Categorie } from 'src/app/model/categorie';
import { SousCategorie } from 'src/app/model/sous-categorie';
import { SousCategorieService } from 'src/app/service/sous-categorie.service';

@Component({
  selector: 'app-add-sous-categorie',
  templateUrl: './add-sous-categorie.component.html',
  styleUrls: ['./add-sous-categorie.component.css']
})
export class AddSousCategorieComponent implements OnInit {
  souscategorie:SousCategorie =new SousCategorie();
  control :FormControl =new FormControl('');
 // formGroup :FormGroup = new FormGroup('');

  submitted: boolean = false;
  dialogRef: any;
  matDialog: any;
  
 
 constructor(public crudApi: SousCategorieService,public fb: FormBuilder ,public toastr :ToastrService,private router: Router,
 /* public dialogRef:MatDialogRef<AddCategorieComponent>*/){}
 //public crudApi!: ClientService 

 
ngOnInit(){

this.infoForm();

}
onSubmit(){
  this.submitted= true;
  if(this.crudApi.choixmenu=='A'){
    this.addData();
  }else{
   this.updateData()
  }
}

  updateData() {
    this.crudApi.updatedata(this.crudApi.dataForm.value.id,this.crudApi.dataForm.value)
    .subscribe( data =>{
      this.dialogRef.close();
      this.crudApi.getAll().subscribe(
        response =>{this.crudApi.listData =response;}
      );
      this.router.navigate(['/souscategories']);
        
      });
  
}
addData(){
this.crudApi.addSousCategorie(this.souscategorie)
.subscribe( data =>{
  this.dialogRef.close();
  this.crudApi.getAll().subscribe(
    response =>{this.crudApi.listData =response;}
  );
  this.router.navigate(['/souscategories']);
    
  });

}


 
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
      libelle:['',[Validators.required,Validators.maxLength(5)]],
      code:['',[Validators.required,Validators.maxLength(5)]],
      code_categorie:['',[Validators.required,Validators.maxLength(5)]],
    
       
     });
  }
  
   getData(){
    this.crudApi.getAll().subscribe(
      response =>{this.crudApi.listData = response;}
    );
  }
 addSousCategorie(){
    const dialogConfig= new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.disableClose=true;
    dialogConfig.width="50%";
    this.matDialog.open(AddSousCategorieComponent,dialogConfig);
  }

  removeData(id:number){
      if(window.confirm('Etes Vous sure de vouloir supprimer cette sous categorie')){
        this.crudApi.deleteData(id).subscribe(data =>{
          console.log(data);
          this.toastr.warning('donné supprimer avec succés');
          this.getData();
        },
        error => console.log(error));
      }

  }

}
