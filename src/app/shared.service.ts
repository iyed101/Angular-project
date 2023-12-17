import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }
  private url='http://localhost:3000'
  chauf:any;
  cam:any;
  public getcamions(){
    return this.http.get(`${this.url}/camions`);
  }
  public newcamion(camion:any){
    return this.http.post(`${this.url}/camions`,camion);
  }
  public delete(camionId: number) {
    const deleteUrl = `${this.url}/camions`+'/'+camionId;
    return this.http.delete(deleteUrl);
  }
  public getcam(id:any){
    return this.http.get(`${this.url}/camions`+'/'+id);
  }

  public modifiercam(id:any, camion:any){
    return this.http.put(`${this.url}/camions`+'/'+id,camion);
  }


  
  public getchauffeur(){
    return this.http.get(`${this.url}/Chauffeurs`);
  }
  public newchauf(chauf:any){
    return this.http.post(`${this.url}/Chauffeurs`,chauf);
  }
  public deletechauf(chaufId: number) {
    return this.http.delete(`${this.url}/Chauffeurs`+'/'+chaufId);
  }
  public getchauf(id:any){
    return this.http.get(`${this.url}/Chauffeurs`+'/'+id);
  }
  public modifierchauf(id:any, chauf:any){
    return this.http.put(`${this.url}/Chauffeurs`+'/'+id,chauf);
  }


  public getmissions(){
    return this.http.get(`${this.url}/mession`);
  }
  public newmiss(miss:any){
    return this.http.post(`${this.url}/mession`,miss);
  }
  public deletemiss(missId: number) {
    return this.http.delete(`${this.url}/mession`+'/'+missId);
  }
  public getmiss(id:any){
    return this.http.get(`${this.url}/mession`+'/'+id);
  }
  public modifiermiss(id:any, miss:any){
    return this.http.put(`${this.url}/mession`+'/'+id,miss);
  }
}
