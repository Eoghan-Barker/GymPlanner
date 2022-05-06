import { Component, OnInit } from '@angular/core';
import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit{

  tracks:string[] = ['Better Days', 'Energy', 'Sunny'];
  currentTrack:string = 'Better Days';

  constructor(private nativeAudio: NativeAudio) { }

  //load all tracks, complex is optimised for longer audio files and allows you to set volume,layers,delay
  ngOnInit(): void {
    this.nativeAudio.preloadComplex('Better Days', './www/bensound-betterdays.mp3', 1, 1, 0);
    this.nativeAudio.preloadComplex('Energy', './www/bensound-energy.mp3', 1, 1, 0);
    this.nativeAudio.preloadComplex('Sunny', './www/bensound-sunny.mp3', 1, 1, 0);
  }

  // play selected track on button press
  PlaySong(){
    // currentTrack is changed using event binding on the radio buttons
    // callback function for when the tack ends(play() can take a function as an arg so .then not needed)
    this.nativeAudio.play(this.currentTrack, () => console.log('Track is done playing'));
    console.log(this.currentTrack);
  }

  // stop playing track on button press
  StopPlaying(){
    this.nativeAudio.stop(this.currentTrack);
  }
}
