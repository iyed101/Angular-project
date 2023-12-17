import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-listerchauf',
  templateUrl: './listerchauf.component.html',
  styleUrls: ['./listerchauf.component.css']
})
export class ListerchaufComponent {
  chauffeurs:any;
  chauffeur={
    nom:'',
    prenom:'',
    numTel:'',
    cin:''
  };
  constructor(private shared:SharedService){ 
    shared.getchauffeur().subscribe(response=>
      {
        this.chauffeurs=response;
      })
      
  }
      refreshChauf() {
        this.shared.getchauffeur().subscribe(response => {
          this.chauffeurs = response;
        });
      }
    
      supprimerChauf(chaufId: number) {
        this.shared.deletechauf(chaufId).subscribe(
          (response) => {
            console.log('chauffeur supprimé avec succès:', response);
            this.refreshChauf();
          },
          (error) => {
            console.error('Erreur lors de la suppression du chauffeur:', error);
          }
        );
      }
}
