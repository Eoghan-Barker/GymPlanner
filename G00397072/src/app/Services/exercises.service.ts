import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  // These arrays are for moving data between pages
  upperExercises:any = [];
  lowerExercises:any = [];

  constructor(private httpClient:HttpClient) { }

  // for each of these httpClient.get calls(made asynchronisally so returns type observable) it is
  // pulling data from the Wger workout manager public API. The data to be pulled is definied by
  // /?language=2 - this will only pull exercise data that is in English
  // &catergory=8 - this specifies which body part the workout is for
  // (8-Arms, 9-Legs, 10-Abs, 11-Chest, 13-Shoulders, 14-Calves)
  // &limit - specifies the max number of items the call will pull(default is 20)
  GetArmsData():Observable<any>{
    return this.httpClient.get('https://wger.de/api/v2/exercise/?language=2&category=8&limit=99');
  }

  GetShouldersData():Observable<any>{
    return this.httpClient.get('https://wger.de/api/v2/exercise/?language=2&category=13&limit=99');
  }

  GetChestData():Observable<any>{
    return this.httpClient.get('https://wger.de/api/v2/exercise/?language=2&category=11&limit=99');
  }

  GetLegsData():Observable<any>{
    return this.httpClient.get('https://wger.de/api/v2/exercise/?language=2&category=9&limit=99');
  }

  GetAbsData():Observable<any>{
    return this.httpClient.get('https://wger.de/api/v2/exercise/?language=2&category=10&limit=99');
  }

  GetCalvesData():Observable<any>{
    return this.httpClient.get('https://wger.de/api/v2/exercise/?language=2&category=14&limit=99');
  }

  // Setters and Getters for passing array data between pages
  SetUpper(array){
    this.upperExercises = array;
  }

  GetUpper(){
    return this.upperExercises;
  }

  SetLower(array){
    this.lowerExercises = array;
  }

  GetLower(){
    return this.lowerExercises;
  }
}
