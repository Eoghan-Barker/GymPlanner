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

  selected:any = [];
  index:Number;
  state:boolean = false;
  name:string;

  i:number = 0;

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

  SaveSelected(){
    // find state of specific checkbox
    for(this.i = 0; this.i<this.selected.length; this.i++){
      // find array index of this checkbox
      if(this.selected[this.i][0] == this.name){
        this.state = !this.selected[this.i][1];
        break;
      }
      else{
        this.state = true;
      }
    }
    if(this.state){
      // store checkbox name and state in 2d array
      this.selected.push([this.name, this.state]);
    } 
    if(!this.state){
      // find index of array member to delete
      for(this.i = 0; this.i<this.selected.length; this.i++){
        if(this.selected[this.i][0] == this.name){
          this.selected.splice(this.i, 1);
        }
      }
    }

    this.exerciseService.SetArray(this.selected);
  }
}
