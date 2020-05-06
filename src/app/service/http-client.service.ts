import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WorkoutGoal } from '../model/workout.model';
import { Activity } from '../model/activity.model';
import { User } from '../model/user.model';
import { SleepGoal } from '../model/sleep.model';
import { FruitGoal } from '../model/fruit.model';
import { VegGoal } from '../model/veg.model';
import { MeditationGoal } from '../model/meditation.model';
import { NatureGoal } from '../model/nature.model';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) {}

  public addUser(user) {
    return this.httpClient.post<User>
     ("http://localhost:8080/register", user);
   }

   public getMedals() {
    return this.httpClient.get<number>
     ("http://localhost:8080/goals/medals");
   }

  getWorkoutgoal(){
    return this.httpClient.get<WorkoutGoal>
    ('http://localhost:8080/goals/workoutgoal');
  }

  public deleteWorkoutgoal(workoutgoal) {
  return this.httpClient.delete<WorkoutGoal>
    ("http://localhost:8080/goals/workoutgoal" + "/"+ workoutgoal.id);
  }

  public createWorkoutgoal(workoutgoal) {
   return this.httpClient.post<WorkoutGoal>
    ("http://localhost:8080/goals/workoutgoal", workoutgoal);
  }

  public updateWorkoutgoal(workoutgoal) {
    return this.httpClient.put<WorkoutGoal>
     ("http://localhost:8080/goals/workoutgoal", workoutgoal);
   }

  getActivities(type){
    return this.httpClient.get<Activity>
    ('http://localhost:8080/activities' + "/"+ type);
  }

  public deleteActivity(activity) {
  return this.httpClient.delete<Activity>
    ("http://localhost:8080/activities" + "/"+ activity.id);
  }

  public createActivity(activity) {
   return this.httpClient.post<Activity>
    ("http://localhost:8080/activities", activity);
  }

  getSleepgoal(){
    return this.httpClient.get<SleepGoal>
    ('http://localhost:8080/goals/sleepgoal');
  }

  public deleteSleepGoal(sleepgoal) {
  return this.httpClient.delete<SleepGoal>
    ("http://localhost:8080/goals/sleepgoal" + "/"+ sleepgoal.id);
  }

  public createSleepGoal(sleepgoal) {
   return this.httpClient.post<SleepGoal>
    ("http://localhost:8080/goals/sleepgoal", sleepgoal);
  }

  public updateSleepGoal(sleepgoal) {
    return this.httpClient.put<SleepGoal>
     ("http://localhost:8080/goal/sleepgoal", sleepgoal);
   }

   getFruitgoal(){
    return this.httpClient.get<FruitGoal>
    ('http://localhost:8080/goals/fruitgoal');
  }

  public deleteFruitGoal(fruitgoal) {
  return this.httpClient.delete<FruitGoal>
    ("http://localhost:8080/goals/fruitgoal" + "/"+ fruitgoal.id);
  }

  public createFruitGoal(fruitgoal) {
   return this.httpClient.post<FruitGoal>
    ("http://localhost:8080/goals/fruitgoal", fruitgoal);
  }

  public updateFruitGoal(fruitgoal) {
    return this.httpClient.put<FruitGoal>
     ("http://localhost:8080/goals/fruitgoal", fruitgoal);
   }

   getVeggoal(){
    return this.httpClient.get<VegGoal>
    ('http://localhost:8080/goals/veggoal');
  }

  public deleteVegGoal(veggoal) {
  return this.httpClient.delete<VegGoal>
    ("http://localhost:8080/goals/veggoal" + "/"+ veggoal.id);
  }

  public createVegGoal(veggoal) {
   return this.httpClient.post<VegGoal>
    ("http://localhost:8080/goals/veggoal", veggoal);
  }

  public updateVegGoal(veggoal) {
    return this.httpClient.put<VegGoal>
     ("http://localhost:8080/goals/veggoal", veggoal);
   }

   getMeditationgoal(){
    return this.httpClient.get<MeditationGoal>
    ('http://localhost:8080/goals/meditationgoal');
  }

  public deleteMeditationGoal(meditationgoal) {
  return this.httpClient.delete<MeditationGoal>
    ("http://localhost:8080/goals/meditationgoal" + "/"+ meditationgoal.id);
  }

  public createMeditationGoal(meditationgoal) {
   return this.httpClient.post<MeditationGoal>
    ("http://localhost:8080/goals/meditationgoal", meditationgoal);
  }

  public updateMeditationGoal(meditationgoal) {
    return this.httpClient.put<MeditationGoal>
     ("http://localhost:8080/goals/meditationgoal", meditationgoal);
   }

   getNaturegoal(){
    return this.httpClient.get<NatureGoal>
    ('http://localhost:8080/goals/naturegoal');
  }

  public deleteNatureGoal(naturegoal) {
  return this.httpClient.delete<NatureGoal>
    ("http://localhost:8080/goals/naturegoal" + "/"+ naturegoal.id);
  }

  public createNatureGoal(naturegoal) {
   return this.httpClient.post<NatureGoal>
    ("http://localhost:8080/goals/naturegoal", naturegoal);
  }

  public updateNatureGoal(naturegoal) {
    return this.httpClient.put<NatureGoal>
     ("http://localhost:8080/goals/naturegoal", naturegoal);
   }
}