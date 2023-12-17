export class Mission{
    public idm: number | undefined;
    public chauffeur:string ;
    public camion:string;
    public datdebut:Date;
    public datdefin:string;
    public tonnage:number;
    constructor(chauffeur:string,camion:string,datdebut:Date,datdefin:string,tonnage:number){
        this.chauffeur=chauffeur;
        this.camion=camion;
        this.datdebut=datdebut;
        this.datdefin=datdefin;
        this.tonnage=tonnage;
    }
}