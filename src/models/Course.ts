export enum SubjectType {
    Accounting = "accounting",
    Graphics = "graphics",
    Programming = "programming",
    Mathematics = "mathematics",
    Science = "science",
    Art = "art"
  }

export class Course {
    constructor(
        public id: number,
        public name: string,
        public subject: SubjectType,
    ) { }
}