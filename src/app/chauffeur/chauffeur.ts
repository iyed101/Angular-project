export class Chauffeur{
    public idc: number | undefined;
    public nom:string ;
    public prenom:string;
    public numTel:string;
    public cin:string;
    constructor(nom:string,prenom:string,numTel:string,cin:string){
        this.nom=nom;
        this.prenom=prenom;
        this.numTel=numTel;
        this.cin=cin;
    }
}