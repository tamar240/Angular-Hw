

export enum EnumGender {
    Male ,
    Female
}

export enum EnumHealthFund {
    Clalit,
    Maccabi,
    Meuhedet,
    Leumit
}

  export class Client {
    constructor(
        public Tz: string,
        public FirstName: string,
        public LastName: string,
        public Gender: EnumGender,
        public Phon: string,
        public Mail: string,
        public HealthFund: EnumHealthFund
    ) {}
}

