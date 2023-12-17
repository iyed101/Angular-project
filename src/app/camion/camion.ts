export class Camion {
    public id: number | undefined;
    public matricule: string;
    public type: string;
    public marque: string;
    constructor(matricule:string, type:string, marque:string) {
    this.matricule = matricule;
    this.type = type;
    this.marque = marque;
    }
}
