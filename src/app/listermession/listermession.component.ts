import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-listermession',
  templateUrl: './listermession.component.html',
  styleUrls: ['./listermession.component.css']
})
export class ListermessionComponent {
  missions:any;
  mission={
    chauffeur:'',
    camion:'',
    datdebut:'',
    datdefin:'',
    tonnage: '',
  };
  constructor(public shared:SharedService){ 
    shared.getmissions().subscribe(response=>
      {
        this.missions=response;
      })
  
      
  }
      refreshmiss() {
        this.shared.getmissions().subscribe(response => {
          this.missions = response;
        });
      }
    
      supprimermiss(missid: number) {
        this.shared.deletemiss(missid).subscribe(
          (response) => {
            console.log('Camion supprimé avec succès:', response);
            this.refreshmiss();
          },
          (error) => {
            console.error('Erreur lors de la suppression du camion:', error);
          }
        );
      }
      extraireSousChaine(maChaine: string ,debut: number, fin: number): string {
        return maChaine.substring(debut, fin);
      }
}
