export class NatureGoal{
    constructor(
      public id: number,
      public goalQuantity: number,
      public frequency: number,
      public percentage: number,
      public currentWeek: number,
      public isSucceeded: boolean,
      public howManyLeft: number,
    ) {}
  }