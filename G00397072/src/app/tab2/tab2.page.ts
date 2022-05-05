import { Component, OnInit } from '@angular/core';
import {ExercisesService} from  '../Services/exercises.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  LegsData:any = [];
  CalvesData:any = [];
  i:number = 0;
  selected:any = [];
  index:Number;
  state:boolean = false;
  name:string;


  constructor(private exerciseService:ExercisesService) {}

  ngOnInit(){
    this.exerciseService.GetLegsData().subscribe(
      (data)=>{
        this.LegsData = data.results; 
      }
    );

    this.exerciseService.GetCalvesData().subscribe(
      (data)=>{
        this.CalvesData = data.results; 
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
