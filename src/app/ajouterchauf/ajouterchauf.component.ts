import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-ajouterchauf',
  templateUrl: './ajouterchauf.component.html',
  styleUrls: ['./ajouterchauf.component.css']
})
export class AjouterchaufComponent {
  chauffeurs:any;
  chauffeur={
    nom:'',
    prenom:'',
    numTel:'',
    cin:'',
    dispo:''
  };
  constructor(private shared:SharedService){ 
    shared.getchauffeur().subscribe(response=>
      {
        this.chauffeurs=response;
        
      })
      
  }
  ajoutchauf(){
    this.chauffeur.dispo='oui';
        this.shared.newchauf(this.chauffeur).subscribe(
          (response)=>{
            this.refreshChauf();
            this.chauffeur={
              nom:'',
              prenom:'',
              numTel:'',
              cin:'',
              dispo:''
      };
          }
        )
      }
  refreshChauf() {
    this.shared.getchauffeur().subscribe(response => {
      this.chauffeurs = response;
    });
  }
}
