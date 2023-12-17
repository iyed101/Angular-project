import { Component } from '@angular/core';
import{SharedService} from '../shared.service'
@Component({
  selector: 'app-ajoutercam',
  templateUrl: './ajoutercam.component.html',
  styleUrls: ['./ajoutercam.component.css']
})
export class AjoutercamComponent {
  camions:any;
  camion={
    matricule:'',
    type:'',
    marque:'',
    dispo:''
  };
  constructor(private shared:SharedService){ 
    shared.getcamions().subscribe(response=>
      {
        this.camions=response;
        
      })
      
  }
  ajout(){
        this.camion.dispo='oui';
        this.shared.newcamion(this.camion).subscribe(
          (response)=>{
            this.refreshCamions();
            this.camion={
              matricule:'',
              type:'',
              marque:'',
              dispo:''
      };
          }
        )
      }
  refreshCamions() {
    this.shared.getcamions().subscribe(response => {
      this.camions = response;
    });
  }
}
