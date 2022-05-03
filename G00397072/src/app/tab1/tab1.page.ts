import { Component, OnInit } from '@angular/core';
import {ExercisesService} from  '../Services/exercises.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  ArmsData:any = [];
  ShoulderData:any = [];
  Exercise = new Array<string>(5);
  Sets = new Array<number>(5);
  Reps = new Array<number>(5);
  Weight = new Array<number>(5);


  constructor(private exerciseService:ExercisesService) {}

  ngOnInit(){
    this.exerciseService.GetArmsData().subscribe(
      (data)=>{
        this.ArmsData = data.results; 
        console.log(this.ArmsData);
      }
    );

    this.exerciseService.GetShouldersData().subscribe(
      (data)=>{
        this.ShoulderData = data.results; 
        console.log(this.ShoulderData);
      }
    );


  }
}
