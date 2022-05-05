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
  ChestData:any = [];
  AbsData:any = [];


  constructor(private exerciseService:ExercisesService) {}

  ngOnInit(){
    this.exerciseService.GetArmsData().subscribe(
      (data)=>{
        this.ArmsData = data.results; 
      }
    );

    this.exerciseService.GetShouldersData().subscribe(
      (data)=>{
        this.ShoulderData = data.results; 
      }
    );

    this.exerciseService.GetChestData().subscribe(
      (data)=>{
        this.ChestData = data.results; 
      }
    );

    this.exerciseService.GetAbsData().subscribe(
      (data)=>{
        this.AbsData = data.results; 
      }
    );

  }
}
