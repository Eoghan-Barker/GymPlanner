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

  // use onInit to make the API get requests as soon as the page is loaded
  // use .subscribe to do this asynchronisly
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

  // Searches through the stored exercises array to check the state of the exercise being selected
  // (will be false if not in array) and changes the state to the opposite(as this is called when the
  // user is changing the state of the checkbox)
  //
  // If the new state is true then the name and state will be pushed to the 2d array
  // Else the name/state pair will be deleted from the array
  // At the end it sets the "global" upperBody array for other pages to use
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

    this.exerciseService.SetUpper(this.selected);
  }
}
