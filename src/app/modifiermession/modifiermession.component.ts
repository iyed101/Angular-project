import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-modifiermession',
  templateUrl: './modifiermession.component.html',
  styleUrls: ['./modifiermession.component.css']
})
export class ModifiermessionComponent {
  miss:any;
  chauffeurs:any;
  camions:any;
  id:any;
  constructor(private act:ActivatedRoute,private shared:SharedService,private router:Router){
    shared.getchauffeur().subscribe(response=>
      {
        this.chauffeurs=response;
      })
    shared.getcamions().subscribe(response=>
      {
        this.camions=response;
      })
  }
  modifierchauf(){
    this.shared.modifiermiss(this.id,this.miss).subscribe(
      response=>{
        this.router.navigate(['/listemis']);
      }
    );
  }
  ngOnInit(): void{
    this.id=this.act.snapshot.paramMap.get('id');
    console.log(this.id);
    this.shared.getmiss(this.id).subscribe(
      response=>{
        this.miss=response;
      }
    )
  }
}
