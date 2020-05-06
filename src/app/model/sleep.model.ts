export class SleepGoal{
    constructor(
      public id: number,
      public goalQuantity: number,
      public percentage: number,
      public currentWeek: number,
      public isSucceeded: boolean,
      public howManyLeft: number,
    ) {}
  }