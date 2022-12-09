import { NgModule } from '@angular/core';
//import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import { ListArtcleComponent } from './article/list-artcle/list-artcle.component';
import { AddCategorieComponent } from './categorie/add-categorie/add-categorie.component';
import { ListCategorieComponent } from './categorie/list-categorie/list-categorie.component';
import { LoginComponent } from './component/login/login.component';
//import { LoginComponent } from './component/login/login.component';
import { PdfGeneratorComponent } from './component/pdf-generator/pdf-generator.component';
//import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './components/add-client/add-client.component';
import { ListClientComponent } from './components/list-client/list-client.component';
import { AddFournisseurComponent } from './fournisseur/add-fournisseur/add-fournisseur.component';
import { ListFournisseurComponent } from './fournisseur/list-fournisseur/list-fournisseur.component';
import { HomeComponent } from './home/home.component';
import { MenubarComponent } from './menubar/menubar.component';
import { AddSousCategorieComponent } from './sousCategorie/add-sous-categorie/add-sous-categorie.component';

const routes: Routes = [
  { path :"",redirectTo:"login",pathMatch:"full"},
 {  path :"AjoutClients",component :AddClientComponent},
 { path : "Clients",component:ListClientComponent},
 {  path :"login",component :LoginComponent},
 { path: 'index', component: HomeComponent },
  { path :"Categories",component: AddCategorieComponent},
  { path : "fourniseur",component:AddFournisseurComponent},
  { path : "menu",component:MenubarComponent},
  { path :"SousCategories",component: AddSousCategorieComponent},
  { path : "listfourniseur",component:ListFournisseurComponent},
  { path : "listCategorie",component:ListCategorieComponent},
  { path : "listArticle",component:ListArtcleComponent},
  { path: "pdf",component:PdfGeneratorComponent},
 // { path : "menu",component:ListClientComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
