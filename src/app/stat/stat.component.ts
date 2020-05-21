import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { WorkoutGoal } from '../model/workout.model';
import { SleepGoal } from '../model/sleep.model';
import { FruitGoal } from '../model/fruit.model';
import { VegGoal } from '../model/veg.model';
import { NatureGoal } from '../model/nature.model';
import { MeditationGoal } from '../model/meditation.model';
import { Activity } from '../model/activity.model';
import * as CanvasJS from '../assets/canvasjs.min';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {

  public pastWorkoutGoals: WorkoutGoal[] =[];
  public pastSleepGoals: SleepGoal[];
  public pastFruitGoals: FruitGoal[];
  public pastVegGoals: VegGoal[];
  public pastNatureGoals: NatureGoal[];
  public pastMeditationGoals: MeditationGoal[];

  public pastWorkoutActivities: Activity[];
  public pastSleepActivities: Activity[];
  public pastFruitActivities: Activity[];
  public pastVegActivities: Activity[];
  public pastNatureActivities: Activity[];
  public pastMeditationActivities: Activity[];

  public workoutGoalDataPoints: any[] =[];
  public workoutActivityDataPoints: any[] =[];
  public natureGoalDataPoints: any[] =[];
  public natureActivityDataPoints: any[] =[];
  public meditationGoalDataPoints: any[] =[];
  public meditationActivityDataPoints: any[] =[];
  public sleepGoalDataPoints: any[] =[];
  public sleepActivityDataPoints: any[] =[];
  public fruitGoalDataPoints: any[] =[];
  public fruitActivityDataPoints: any[] =[];
  public vegGoalDataPoints: any[] =[];
  public vegActivityDataPoints: any[] =[];

  public workoutChart = false;
  public sleepChart = false;

  public counter: number = 0;
  
  
  constructor(private httpClientService: HttpClientService) { }
  

  ngOnInit(): void {
    this.httpClientService.getPastWorkoutGoals().subscribe(
      goal => 
      {
        this.pastWorkoutGoals = goal;
        this.httpClientService.getPastActivities("Workout").subscribe(
          act => 
          {
            this.pastWorkoutActivities = act;
            this.getWorkoutData();
         //   workoutchart.render();
          });
      }
    );
    
    this.httpClientService.getPastSleepGoals().subscribe(
      goal => 
      {
        this.pastSleepGoals = goal;
        this.httpClientService.getPastActivities("Sleep").subscribe(
          act => 
          {
            this.pastSleepActivities = act;
            this.getSleepData();
        //    sleepchart.render();
          });
      }
    );

    this.httpClientService.getPastFruitGoals().subscribe(
      goal => 
      {
        this.pastFruitGoals = goal;
        this.httpClientService.getPastActivities("Fruit").subscribe(
          act => 
          {
            this.pastFruitActivities = act;
            this.getFruitData();
        //    fruitchart.render();
          });
      }
    );
    this.httpClientService.getPastVegGoals().subscribe(
      goal => 
      {
        this.pastVegGoals = goal;
        this.httpClientService.getPastActivities("Vegetable").subscribe(
          act => 
          {
            this.pastVegActivities = act;
            this.getVegData();
         //   vegchart.render();
          });
      }
    );
    this.httpClientService.getPastNatureGoals().subscribe(
      goal => 
      {
        this.pastNatureGoals = goal;
        this.httpClientService.getPastActivities("Nature").subscribe(
          act => 
          {
            this.pastNatureActivities = act;
            this.getNatureData();
         //   naturechart.render();
          });
      }
    );
    this.httpClientService.getPastMeditationGoals().subscribe(
      goal => 
      {
        this.pastMeditationGoals = goal;
        this.httpClientService.getPastActivities("Meditation").subscribe(
          act => 
          {
            this.pastMeditationActivities = act;
            this.getMeditationData();
         //   meditationchart.render();
         workoutchart.render();
      sleepchart.render();
      fruitchart.render();
      vegchart.render();
      naturechart.render();
      meditationchart.render();
          });
      }
    );

    
    
    var workoutchart = new CanvasJS.Chart("workout-chart", {
      
      animationEnabled: true,
      title:{
      },	
      axisY: {
        title: "Workout in minutes",
        titleFontColor: "#17a2b8",
        lineColor: "#17a2b8",
        labelFontColor: "#17a2b8",
        tickColor: "#17a2b8"
      },
      toolTip: {
        shared: true
      },
      legend: {
        cursor:"pointer",
      },
      data: [{
        type: "column",
        name: "Goal (mins)",
        legendText: "Goal",
        showInLegend: true, 
        dataPoints:this.workoutGoalDataPoints
      },
      {
        type: "column",	
        name: "All activities (mins)",
        legendText: "All activities",
        axisYType: "primary",
        showInLegend: true,
        dataPoints:this.workoutActivityDataPoints
      }]
    });

    var naturechart = new CanvasJS.Chart("nature-chart", {
      animationEnabled: true,
      title:{
      },	
      axisY: {
        title: "Time in nature in minutes",
        titleFontColor: "#17a2b8",
        lineColor: "#17a2b8",
        labelFontColor: "#17a2b8",
        tickColor: "#17a2b8"
      },
      toolTip: {
        shared: true
      },
      legend: {
        cursor:"pointer",
      },
      data: [{
        type: "column",
        name: "Goal (mins)",
        legendText: "Goal",
        showInLegend: true, 
        dataPoints:this.natureGoalDataPoints
      },
      {
        type: "column",	
        name: "All activities (mins)",
        legendText: "All activities",
        axisYType: "primary",
        showInLegend: true,
        dataPoints:this.natureActivityDataPoints
      }]
    });
    
    var meditationchart = new CanvasJS.Chart("meditation-chart", {
      animationEnabled: true,
      title:{
      },	
      axisY: {
        title: "Meditation in minutes",
        titleFontColor: "#17a2b8",
        lineColor: "#17a2b8",
        labelFontColor: "#17a2b8",
        tickColor: "#17a2b8"
      },
      toolTip: {
        shared: true
      },
      legend: {
        cursor:"pointer",
      },
      data: [{
        type: "column",
        name: "Goal (mins)",
        legendText: "Goal",
        showInLegend: true, 
        dataPoints:this.meditationGoalDataPoints
      },
      {
        type: "column",	
        name: "All activities (mins)",
        legendText: "All activities",
        axisYType: "primary",
        showInLegend: true,
        dataPoints:this.meditationActivityDataPoints
      }]
    });

    var sleepchart = new CanvasJS.Chart("sleep-chart", {
      animationEnabled: true,
      title:{
      },	
      axisY: {
        title: "Daily sleep goal in hours",
        titleFontColor: "#17a2b8",
        lineColor: "#17a2b8",
        labelFontColor: "#17a2b8",
        tickColor: "#17a2b8"
      },
      toolTip: {
        shared: true
      },
      legend: {
        cursor:"pointer",
      },
      data: [{
        type: "column",
        name: "Goal (hours)",
        legendText: "Goal",
        showInLegend: true, 
        dataPoints:this.sleepGoalDataPoints
      },
      {
        type: "column",	
        name: "Avg sleep per day (hours)",
        legendText: "Avg sleep per day",
        axisYType: "primary",
        showInLegend: true,
        dataPoints:this.sleepActivityDataPoints
      }]
    });

    var fruitchart = new CanvasJS.Chart("fruit-chart", {
      animationEnabled: true,
      title:{
      },	
      axisY: {
        title: "Daily fruit goal in portions",
        titleFontColor: "#17a2b8",
        lineColor: "#17a2b8",
        labelFontColor: "#17a2b8",
        tickColor: "#17a2b8"
      },
      toolTip: {
        shared: true
      },
      legend: {
        cursor:"pointer",
      },
      data: [{
        type: "column",
        name: "Goal (portions)",
        legendText: "Goal",
        showInLegend: true, 
        dataPoints:this.fruitGoalDataPoints
      },
      {
        type: "column",	
        name: "Avg fruit per day (portions)",
        legendText: "Avg fruit per day",
        axisYType: "primary",
        showInLegend: true,
        dataPoints:this.fruitActivityDataPoints
      }]
    });

    var vegchart = new CanvasJS.Chart("veg-chart", {
      animationEnabled: true,
      title:{
      },	
      axisY: {
        title: "Daily vegetable goal in portions",
        titleFontColor: "#17a2b8",
        lineColor: "#17a2b8",
        labelFontColor: "#17a2b8",
        tickColor: "#17a2b8"
      },
      toolTip: {
        shared: true
      },
      legend: {
        cursor:"pointer",
      },
      data: [{
        type: "column",
        name: "Goal (portions)",
        legendText: "Goal",
        showInLegend: true, 
        dataPoints:this.vegGoalDataPoints
      },
      {
        type: "column",	
        name: "Avg vegetable per day (portions)",
        legendText: "Avg vegetable per day",
        axisYType: "primary",
        showInLegend: true,
        dataPoints:this.vegActivityDataPoints
      }]
    });



  }

  
  public getWorkoutData()
  {
    this.pastWorkoutGoals.sort((a, b) => (a.currentWeek > b.currentWeek) ? 1 : -1);
    this.pastWorkoutGoals.forEach( (goal) => {  
      var gweek = +goal.currentWeek.toString().slice(-2);
      var week = "Week "+goal.currentWeek.toString().slice(-2);
      var gmins = goal.goalQuantity*goal.frequency;
      var actmins = 0;
      this.pastWorkoutActivities.forEach((act) => {
        if(gweek === act.currentWeek){actmins += act.quantity;}
      });
      this.workoutGoalDataPoints.push({ 
        label: week, 
        y: gmins		
      });
      this.workoutActivityDataPoints.push({ 
        label: week,
        y: actmins		
      });
    });
  } 


public getNatureData()
  {
    this.pastNatureGoals.sort((a, b) => (a.currentWeek > b.currentWeek) ? 1 : -1);
    this.pastNatureGoals.forEach( (goal) => {  
      var gweek = +goal.currentWeek.toString().slice(-2);
      var week = "Week "+goal.currentWeek.toString().slice(-2);
      var gmins = goal.goalQuantity*goal.frequency;
      var actmins = 0;
      this.pastNatureActivities.forEach((act) => {
        if(gweek === act.currentWeek){actmins += act.quantity;}
      });
      this.natureGoalDataPoints.push({ 
        label: week, 
        y: gmins		
      });
      this.natureActivityDataPoints.push({ 
        label: week,
        y: actmins		
      });
    });
  } 
  public getMeditationData()
  {
    this.pastMeditationGoals.sort((a, b) => (a.currentWeek > b.currentWeek) ? 1 : -1);
    this.pastMeditationGoals.forEach( (goal) => {  
      var gweek = +goal.currentWeek.toString().slice(-2);
      var week = "Week "+goal.currentWeek.toString().slice(-2);
      var gmins = goal.goalQuantity*goal.frequency;
      var actmins = 0;
      this.pastMeditationActivities.forEach((act) => {
        if(gweek === act.currentWeek){actmins += act.quantity;}
      });
      this.meditationGoalDataPoints.push({ 
        label: week, 
        y: gmins		
      });
      this.meditationActivityDataPoints.push({ 
        label: week,
        y: actmins		
      });
    });
  } 
  public getSleepData()
  {
    this.pastSleepGoals.sort((a, b) => (a.currentWeek > b.currentWeek) ? 1 : -1);
    this.pastSleepGoals.forEach( (goal) => {  
      var gweek = +goal.currentWeek.toString().slice(-2);
      var week = "Week "+goal.currentWeek.toString().slice(-2);
      var gmins = goal.goalQuantity;
      var actmins = 0;
      this.pastSleepActivities.forEach((act) => {
        if(gweek === act.currentWeek){actmins += act.quantity;}
      });
      actmins = actmins/7;
      this.sleepGoalDataPoints.push({ 
        label: week, 
        y: gmins		
      });
      this.sleepActivityDataPoints.push({ 
        label: week,
        y: actmins		
      });
    });
  } 
  public getFruitData()
  {
    this.pastFruitGoals.sort((a, b) => (a.currentWeek > b.currentWeek) ? 1 : -1);
    this.pastFruitGoals.forEach( (goal) => {  
      var gweek = +goal.currentWeek.toString().slice(-2);
      var week = "Week "+goal.currentWeek.toString().slice(-2);
      var gmins = goal.goalQuantity;
      var actmins = 0;
      this.pastFruitActivities.forEach((act) => {
        if(gweek === act.currentWeek){actmins += act.quantity;}
      });
      actmins = actmins/7;
      this.fruitGoalDataPoints.push({ 
        label: week, 
        y: gmins		
      });
      this.fruitActivityDataPoints.push({ 
        label: week,
        y: actmins		
      });
    });
  } 
  public getVegData()
  {
    this.pastVegGoals.sort((a, b) => (a.currentWeek > b.currentWeek) ? 1 : -1);
    this.pastVegGoals.forEach( (goal) => {  
      var gweek = +goal.currentWeek.toString().slice(-2);
      var week = "Week "+goal.currentWeek.toString().slice(-2);
      var gmins = goal.goalQuantity;
      var actmins = 0;
      this.pastVegActivities.forEach((act) => {
        if(gweek === act.currentWeek){actmins += act.quantity;}
      });
      actmins = actmins/7;
      this.vegGoalDataPoints.push({ 
        label: week, 
        y: gmins		
      });
      this.vegActivityDataPoints.push({ 
        label: week,
        y: actmins		
      });
    });
  } 
  
}

