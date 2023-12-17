import { Component } from '@angular/core';
import{SharedService} from '../shared.service'
@Component({
  selector: 'app-listetercam',
  templateUrl: './listetercam.component.html',
  styleUrls: ['./listetercam.component.css']
})
export class ListetercamComponent {
  camions:any;
  camion={
    matricule:'',
    type:'',
    marque:''
  };
  constructor(private shared:SharedService){ 
    shared.getcamions().subscribe(response=>
      {
        this.camions=response;
      })
      
  }
  ajout(){
        this.shared.newcamion(this.camion).subscribe(
          (response)=>{
            this.refreshCamions();
          }
        )
      }
      refreshCamions() {
        this.shared.getcamions().subscribe(response => {
          this.camions = response;
        });
      }
    
      supprimerCamion(camionId: number) {
        this.shared.delete(camionId).subscribe(
          (response) => {
            console.log('Camion supprimé avec succès:', response);
            this.refreshCamions();
          },
          (error) => {
            console.error('Erreur lors de la suppression du camion:', error);
          }
        );
      }
}
