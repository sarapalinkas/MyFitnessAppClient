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
  constructor(private httpClientService: HttpClientService) { }
  

  ngOnInit(): void {
    this.httpClientService.getPastWorkoutGoals().subscribe(
      result => 
      {
        this.pastWorkoutGoals = result;
        this.getWorkoutGoalData(); 
        console.log(this.workoutGoalDataPoints);
      }
    );
    this.httpClientService.getPastActivities("Workout").subscribe(
      result => 
      {
        this.pastWorkoutActivities = result;
        this.getWorkoutActivityData();
        console.log(this.workoutActivityDataPoints);
        workoutchart.render();
      }

        
    );
    this.httpClientService.getPastSleepGoals().subscribe(
      result => this.pastSleepGoals = result
    );
    this.httpClientService.getPastFruitGoals().subscribe(
      result => this.pastFruitGoals = result
    );
    this.httpClientService.getPastVegGoals().subscribe(
      result => this.pastVegGoals = result
    );
    this.httpClientService.getPastNatureGoals().subscribe(
      result => this.pastNatureGoals = result
    );
    this.httpClientService.getPastMeditationGoals().subscribe(
      result => this.pastMeditationGoals = result
    );
    this.httpClientService.getPastMeditationGoals().subscribe(
      result => this.pastMeditationGoals = result
    );

    this.httpClientService.getPastActivities("Sleep").subscribe(
      result => this.pastSleepActivities = result
    );
    this.httpClientService.getPastActivities("Fruit").subscribe(
      result => this.pastFruitActivities = result
    );
    this.httpClientService.getPastActivities("Vegetable").subscribe(
      result => this.pastVegActivities = result
    );
    this.httpClientService.getPastActivities("Nature").subscribe(
      result => this.pastNatureActivities = result
    );
    this.httpClientService.getPastActivities("Meditation").subscribe(
      result => this.pastMeditationActivities = result
    );


    var workoutchart = new CanvasJS.Chart("workout-chart", {
      animationEnabled: true,
      title:{
        text: "Past Workout Goals and Activities"
      },	
      axisY: {
        title: "Workout in minutes",
        titleFontColor: "#4F81BC",
        lineColor: "#4F81BC",
        labelFontColor: "#4F81BC",
        tickColor: "#4F81BC"
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
    
  
  }

  public getWorkoutGoalData()
  {
    this.pastWorkoutGoals.forEach( (element) => {
      console.log(element.id);
      var week ="Week "+element.currentWeek.toString().slice(-2);
      var mins = element.goalQuantity*element.frequency;
      this.workoutGoalDataPoints.push({ 
        label: week, 
        y: mins		
      });
    });
  }
  public getWorkoutActivityData()
  {
    var currweek = 0;
    //var mins;
    var weeks: number[] = [];
    var mins : number[] = [];
    this.pastWorkoutActivities.forEach((element) =>
    {
      if(weeks.includes(element.currentWeek))
      {
        var x = mins.pop();
        x += element.quantity;
        mins.push(x);

      }
      else
      {
        weeks.push(element.currentWeek);
        mins.push(element.quantity);
      }
    })
    for(let i = 0; i<mins.length; i++)
    {
      this.workoutActivityDataPoints.push({ 
        label: "Week "+weeks[i], 
        y: mins[i]		
      });
    }
    
  }
 
  
}

