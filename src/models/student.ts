export class student{
    constructor(
        public Id:number,
        public firstName:string,
        public lastName:string,
        public isActive:boolean=true,
        public departureDate:Date=new Date(),
        public flag=false,
        public isPay:boolean=true,

    ){}
}