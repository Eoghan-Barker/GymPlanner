import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  selectedExercises:any = [];

  constructor(private httpClient:HttpClient) { }

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

  SetArray(array){
    this.selectedExercises = array;
  }

  GetArray(){
    return this.selectedExercises;
  }
}
