import { Component, Inject,OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Categorie } from 'src/app/model/categorie';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddCategorieComponent } from '../add-categorie/add-categorie.component';
import { CategorieService } from 'src/app/service/categorie.service';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddSousCategorieComponent } from 'src/app/sousCategorie/add-sous-categorie/add-sous-categorie.component';
import { AuthentificationService } from 'src/app/service/authentification.service';
import { ClientService } from 'src/app/service/client.service';
import { AddClientComponent } from 'src/app/components/add-client/add-client.component';


@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.css']
})
export class ListCategorieComponent implements OnInit {
  categorie:Categorie=new Categorie();
  control :FormControl =new FormControl('');
  submitted: boolean = false;
  choixmenu : string = 'A';
  listData!:Categorie[];
  public value:any;
 //public username !:string;

  modiform = this.fb.group({
    code:[''],
    libelle: ['']
  });

 constructor(public authentificationService :AuthentificationService ,public clientService: ClientService,public crudApi: CategorieService,public fb: FormBuilder ,public toastr :ToastrService,private router: Router,
 private matDialog :MatDialog ,@Inject(MAT_DIALOG_DATA) private data :any,
public dialogRef:MatDialogRef<AddCategorieComponent>,){}

 
ngOnInit(){
this.getData();
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

onSubmit(){
  this.submitted= true;
  if(this.crudApi.choixmenu=="A"){
    this.addCategorie(); 
  }else{
    this.updateCategorie();
  }
}
addCategorie(){
    const dialogConfig= new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.disableClose=true;
    dialogConfig.width="50%";
    this.matDialog.open(AddCategorieComponent,dialogConfig);
    this.ResetForm();
  
   // this.toastr.success('validation faite avec succés');
}

  updateCategorie() {
    this.crudApi.updateData(this.crudApi.dataForm.value.id,this.crudApi.dataForm.value)
    .subscribe(_data =>{
      this.dialogRef.close();
     this.crudApi.getAll().subscribe(
        response=>{this.crudApi.listData =response;}
      );
     /// this.router.navigate(['/Categories']);
      });
}
addSousCategorie(){
  const dialogConfig= new MatDialogConfig();
  dialogConfig.autoFocus=true;
  dialogConfig.disableClose=true;
  dialogConfig.width="50%";
  this.matDialog.open(AddSousCategorieComponent,dialogConfig);
  this.toastr.success('validation faite avec succés');
}
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
      id:null,
      libelle:['',[Validators.required]],
      code:['',[Validators.required,Validators.maxLength(5)]],
     });
  }
  ResetForm() {
    this.crudApi.dataForm.reset();
  }
   getData(){
    this.crudApi.getAll().subscribe(
       response =>{this.crudApi.listData = response;
     
      }
    );
  }
  addData(){
    this.crudApi.addcategorie(this.crudApi.dataForm.value)
    .subscribe(data =>{
      this.dialogRef.close();
      this.toastr.success('validation faite avec succés');
      this.crudApi.getAll().subscribe(
        response =>{this.crudApi.listData =response;}
        
      );
      this.router.navigate(['/Categories']);
      this.ResetForm();
      });
    }
  removeData(id:number){
      if(window.confirm('Etes Vous sure de vouloir supprimer cette categorie')){
        this.crudApi.deleteData(id).subscribe(data =>{
          console.log(data);
          this.toastr.warning('donné supprimer avec succés');
          this.getData();
        },
          (error) => console.log(error));
        }
  }
  selectData(item:Categorie){
   
    this.crudApi.choixmenu="M";
    this.crudApi.dataForm= this.fb.group(Object.assign({},item));
    console.log(item);
    const dialogConfig= new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.disableClose=true;
    dialogConfig.width="50%";
    dialogConfig.data=item;
    this.matDialog.open(AddCategorieComponent,dialogConfig);
   ((error: any) => console.log(error));
  }
  isAuthenticated(){
    return this.authentificationService.isAuthenticated();

   }
   logOut(){
    return this.authentificationService.logout();
    
   }

}
