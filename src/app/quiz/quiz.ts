

export class Quiz {
    q0:String;
    q1:String;
    q2:String;
    select1:String;
    select2:String;
    select3:String;
    select4:String;

    constructor(object: any={}){
        this.q0 = this.q0?this.q0:object.q0; 
        this.q1 = this.q1?this.q1:object.q1; 
        this.q2 = this.q2?this.q2:object.q2; 
        this.select1 = this.select1?this.select1:object.select1; 
        this.select2 = this.select2?this.select2:object.select2; 
        this.select3 = this.select3?this.select3:object.select3; 
        this.select4 = this.select4?this.select4:object.select4; 
    }
    
}