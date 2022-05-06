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
  selectedUpper:any = [];
  selectedLower:any = [];
  exercisesUpper:any = [];
  exercisesLower:any = [];

  constructor(private exerciseService:ExercisesService, private storage:Storage){}

  // Called every time the user enters the tab, copies array data from service into this page.
  // Removes the booleans from the array as only the exercise names are needed
  ionViewWillEnter(): void {
    this.selectedUpper = this.exerciseService.GetUpper();
    this.selectedLower = this.exerciseService.GetLower();

    //reset sizeof array incase of updates(array could get smaller)
    this.exercisesUpper = [];
    this.exercisesLower = [];
    // copy arrays to new one without the booleans
    for(let i = 0; i< this.selectedUpper.length;i++){
        this.exercisesUpper[i] = this.selectedUpper[i][0];
    }
    for(let i = 0; i< this.selectedLower.length;i++){
      this.exercisesLower[i] = this.selectedLower[i][0];
  }
  } 

  // Save both upper and lower arrays to storage
  SaveToStorage(){
    this.storage.create().then(() => {
      this.storage.set("upperRoutine", this.exercisesUpper);
      this.storage.set("lowerRoutine", this.exercisesLower);
    })
    .catch();
  }

  // Load both arrays into this page and also into the service
  LoadFromStorage(){
    this.storage.create().then(()=>{
      this.storage.get("upperRoutine").then((data)=>{
        this.exercisesUpper = data;
        // set the array for other pages in app
        this.exerciseService.SetUpper(this.exercisesUpper);
      })
      .catch();
      this.storage.get("lowerRoutine").then((data)=>{
        this.exercisesLower = data;
        // set the array for other pages in app
        this.exerciseService.SetLower(this.exercisesLower);
      })
      .catch();
    })
    .catch();
    
  }

}
