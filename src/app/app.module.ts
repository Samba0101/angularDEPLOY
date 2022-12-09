import { Inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { AddCategorieComponent } from './categorie/add-categorie/add-categorie.component';
import { ListCategorieComponent } from './categorie/list-categorie/list-categorie.component';
import { ListArtcleComponent } from './article/list-artcle/list-artcle.component';
import { AddArtcleComponent } from './article/add-artcle/add-artcle.component';
import { AddFournisseurComponent } from './fournisseur/add-fournisseur/add-fournisseur.component';
import { ListFournisseurComponent } from './fournisseur/list-fournisseur/list-fournisseur.component';
import { AddSousCategorieComponent } from './sousCategorie/add-sous-categorie/add-sous-categorie.component';
import { ListSousCategorieComponent } from './sousCategorie/list-sous-categorie/list-sous-categorie.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
//import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSliderModule} from '@angular/material/slider';
import { CategorieService } from './service/categorie.service';
import { inject } from '@angular/core/testing';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LoginComponent } from './component/login/login.component';
import { PdfGeneratorComponent } from './component/pdf-generator/pdf-generator.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MenubarComponent } from './menubar/menubar.component';
import { ListClientComponent } from './components/list-client/list-client.component';

//import { NgMatSearchBarModule } from 'ng-mat-search-bar';

//const MATERIAL_MODULES=[MatToolbarModule,MatIconModule,MAT_DIALOG_DATA];
const MaterialComponent = [MatDialogModule
]

@NgModule({
  declarations: [
    AppComponent,
    AddClientComponent,
    HomeComponent,
    MenubarComponent,
    ListClientComponent,
    NavbarComponent,
    AddCategorieComponent,
    ListCategorieComponent,
    ListArtcleComponent,
    AddArtcleComponent,
    AddFournisseurComponent,
    ListFournisseurComponent,
    AddSousCategorieComponent,
    ListSousCategorieComponent,
    LoginComponent,
    PdfGeneratorComponent,
    ListClientComponent,
    
    //
   
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    AppRoutingModule,
  // RouterModule,  //.(AppRoutes),
    HttpClientModule,
   FormsModule,
    ReactiveFormsModule,
   BrowserAnimationsModule,
   MatSidenavModule,
    ToastrModule.forRoot(),
    MatIconModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    { provide: NG_VALUE_ACCESSOR,useValue:{} },
    { provide: MAT_DIALOG_DATA,  useValue: { Data:inject } },
    { provide: MatDialogRef, useValue: {} },
   { provide: Inject },
   ],
  bootstrap: [AppComponent]
})  //.compileComponents()

export class AppModule { }

