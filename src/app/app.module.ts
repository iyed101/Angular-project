import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CamionComponent } from './camion/camion.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AjoutercamComponent } from './ajoutercam/ajoutercam.component';
import { ListetercamComponent } from './listetercam/listetercam.component';
import { ModifiercamComponent } from './modifiercam/modifiercam.component';
import { ChauffeurComponent } from './chauffeur/chauffeur.component';
import { AjouterchaufComponent } from './ajouterchauf/ajouterchauf.component';
import { ListerchaufComponent } from './listerchauf/listerchauf.component';
import { ModifierchaufComponent } from './modifierchauf/modifierchauf.component';
import { MessionComponent } from './mession/mession.component';
import { AjoutermessionComponent } from './ajoutermession/ajoutermession.component';
import { ListermessionComponent } from './listermession/listermession.component';
import { ModifiermessionComponent } from './modifiermession/modifiermession.component';
@NgModule({
  declarations: [
    AppComponent,
    CamionComponent,
    HeaderComponent,
    AjoutercamComponent,
    ListetercamComponent,
    ModifiercamComponent,
    ChauffeurComponent,
    AjouterchaufComponent,
    ListerchaufComponent,
    ModifierchaufComponent,
    MessionComponent,
    AjoutermessionComponent,
    ListermessionComponent,
    ModifiermessionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
