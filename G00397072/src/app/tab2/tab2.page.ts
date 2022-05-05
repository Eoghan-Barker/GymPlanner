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
}
