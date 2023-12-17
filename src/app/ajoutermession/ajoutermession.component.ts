import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-ajoutermession',
  templateUrl: './ajoutermession.component.html',
  styleUrls: ['./ajoutermession.component.css']
})
export class AjoutermessionComponent {
  missions:any;
  chauffeurs:any;
  camions:any;
  camion:any;
  mission={
    chauffeur:'',
    camion:'',
    datdebut:'',
    datdefin:'',
    tonnage: '',
    dispo:''
  };
options: any;
  constructor(private shared:SharedService){ 
    shared.getmissions().subscribe(response=>
      {
        this.missions=response;
      })
    shared.getchauffeur().subscribe(response=>
      {
        this.chauffeurs=response;
      })
    shared.getcamions().subscribe(response=>
      {
        this.camions=response;
      })
  }
  ajoutmiss() {
    this.mission.dispo = 'oui';
  
    this.shared.newmiss(this.mission).subscribe(
      (response) => {
        // Appelé une fois que la nouvelle mission est ajoutée avec succès
        this.refreshmiss();
  
        this.mission = {
          chauffeur: '',
          camion: '',
          datdebut: '',
          datdefin: '',
          tonnage: '',
          dispo: ''
        };
  
        // Appel pour obtenir les informations sur le camion
        this.shared.getcam(this.mission.camion.substring(this.mission.camion.length - 1, this.mission.camion.length)).subscribe(
          (response) => {
            this.camion = response;
  
            // Mettre à jour la disponibilité du camion
            this.camion.dispo = 'non';
            this.shared.modifiercam(this.mission.camion.substring(this.mission.camion.length - 1, this.mission.camion.length), this.camion);
          }
        );
      }
    );
  }
  
  refreshmiss() {
    this.shared.getmissions().subscribe(response => {
      this.missions = response;
    });
  }
}
