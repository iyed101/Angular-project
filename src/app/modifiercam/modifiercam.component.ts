import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-modifiercam',
  templateUrl: './modifiercam.component.html',
  styleUrls: ['./modifiercam.component.css']
})
export class ModifiercamComponent {
  camion:any;

  id:any;
  constructor(private act:ActivatedRoute,private shared:SharedService,private router:Router){}
  modifier(){
    this.shared.modifiercam(this.id,this.camion).subscribe(
      response=>{
        this.router.navigate(['/liste']);
      }
    );
  }
  ngOnInit(): void{
    this.id=this.act.snapshot.paramMap.get('id');
    console.log(this.id);
    this.shared.getcam(this.id).subscribe(
      response=>{
        this.camion=response;
      }
    )
  }
}
