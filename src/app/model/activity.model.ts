export class Activity{
    constructor(
      public id: number,
      public goalType: string,
      public quantity: number,
      public currentWeek: number,
    ) {}
  }