import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './authentication.service';

export class Workoutgoal{
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

export class Activity{
  constructor(
    public id: number,
    public goalType: string,
    public quantity: number,
    public currentWeek: number,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) {}

  public addUser(user) {
    return this.httpClient.post<User>
     ("http://localhost:8080/register", user);
   }

  getWorkoutgoal(){
    return this.httpClient.get<Workoutgoal[]>
    ('http://localhost:8080/workoutgoals');
  }

  public deleteWorkoutgoal(workoutgoal) {
  return this.httpClient.delete<Workoutgoal>
    ("http://localhost:8080/workoutgoals" + "/"+ workoutgoal.id);
  }

  public createWorkoutgoal(workoutgoal) {
   return this.httpClient.post<Workoutgoal>
    ("http://localhost:8080/workoutgoals", workoutgoal);
  }

  getActivities(type){
    return this.httpClient.get<Activity[]>
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
}