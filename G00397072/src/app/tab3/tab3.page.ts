import { Component } from '@angular/core';
import { ViewDidEnter, ViewWillEnter } from '@ionic/angular';
import {ExercisesService} from  '../Services/exercises.service'
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements ViewWillEnter{
  selected:any = [];
  exercises:any = [];

  constructor(private exerciseService:ExercisesService, private storage:Storage){}

  ionViewWillEnter(): void {
    this.selected = this.exerciseService.GetArray();

    //reset sizeof array incase of updates(array could get smaller)
    this.exercises = [];
    for(let i = 0; i< this.selected.length;i++){
        this.exercises[i] = this.selected[i][0];
    }
  } 

  SaveToStorage(){
    this.storage.create().then(() => {
      this.storage.set("routine", this.exercises);
    })
    .catch();
  }

  LoadFromStorage(){
    this.storage.create().then(()=>{
      this.storage.get("routine").then((data)=>{
        this.exercises = data;
        // set the array for other pages in app
        this.exerciseService.SetArray(this.exercises);
      })
      .catch();
    })
    .catch();
    
  }

}
