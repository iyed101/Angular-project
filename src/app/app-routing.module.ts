import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutercamComponent } from './ajoutercam/ajoutercam.component';
import { ListetercamComponent } from './listetercam/listetercam.component';
import { ModifiercamComponent } from './modifiercam/modifiercam.component';
import { AjouterchaufComponent } from './ajouterchauf/ajouterchauf.component';
import { ListerchaufComponent } from './listerchauf/listerchauf.component';
import { ModifierchaufComponent } from './modifierchauf/modifierchauf.component';
import { AjoutermessionComponent } from './ajoutermession/ajoutermession.component';
import { ListermessionComponent } from './listermession/listermession.component';
import { ModifiermessionComponent } from './modifiermession/modifiermession.component';

const routes: Routes = [
  {path:'ajout',component:AjoutercamComponent},
  {path:'liste' , component:ListetercamComponent},
  {path:'modifier/:id', component:ModifiercamComponent},


  {path:'ajoutch',component:AjouterchaufComponent},
  {path:'listech',component:ListerchaufComponent},
  {path:'modifierchauf/:id', component:ModifierchaufComponent},

  
  {path:'ajoutmis',component:AjoutermessionComponent},
  {path:'listemis',component:ListermessionComponent},
  {path:'modifiermis/:id',component:ModifiermessionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
