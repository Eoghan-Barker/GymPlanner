import { Component } from '@angular/core';
import { ViewDidEnter, ViewWillEnter } from '@ionic/angular';
import {ExercisesService} from  '../Services/exercises.service'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements ViewWillEnter{
  selected:any = [];
  exercises:any = [];

  constructor(private exerciseService:ExercisesService){}

  ionViewWillEnter(): void {
    this.selected = this.exerciseService.GetArray();

    //reset sizeof array incase of updates(array could get smaller)
    this.exercises = [];
    for(let i = 0; i< this.selected.length;i++){
        this.exercises[i] = this.selected[i][0];
    }


  }

  

  
}
