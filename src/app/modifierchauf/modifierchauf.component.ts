import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-modifierchauf',
  templateUrl: './modifierchauf.component.html',
  styleUrls: ['./modifierchauf.component.css']
})
export class ModifierchaufComponent {
  chauf:any;
  id:any;
  constructor(private act:ActivatedRoute,private shared:SharedService,private router:Router){}
  modifierchauf(){
    this.shared.modifierchauf(this.id,this.chauf).subscribe(
      response=>{
        this.router.navigate(['/listech']);
      }
    );
  }
  ngOnInit(): void{
    this.id=this.act.snapshot.paramMap.get('id');
    console.log(this.id);
    this.shared.getchauf(this.id).subscribe(
      response=>{
        this.chauf=response;
      }
    )
  }
}
