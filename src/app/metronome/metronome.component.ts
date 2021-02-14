import { Component, OnInit } from '@angular/core';
import { FlashAnimation } from '../animation/flash';
import { Beat} from '../metronome-configurator/beat';
import { Metronome } from '../metronome-configurator/metronome';

@Component({
  selector: 'app-metronome',
  templateUrl: './metronome.component.html',
  styleUrls: ['./metronome.component.scss']
})
export class MetronomeComponent implements OnInit {

  metronome: Metronome;
  isPlaying: boolean;
  playButton: string;

  audio1: HTMLAudioElement;
  audio2: HTMLAudioElement;


  ngOnInit() {
    this.metronome = new Metronome();
    this.playButton = 'playButton';

    this.audio1 = new Audio();
    this.audio1.src = '../../assets/audio/metronome1.wav';
    this.audio1.load();
    this.audio2 = new Audio();
    this.audio2.src = '../../assets/audio/metronome2.wav';
    this.audio2.load();
  }

  
  async playMetronome(){
    let beat: Beat;

    if(!this.isPlaying) {
      this.playButton = "stopButton";
    } else {
      this.playButton = "playButton";
    }
  
    this.isPlaying = !this.isPlaying;
    for(let i=0; this.isPlaying; i++) {
      beat = this.metronome.beatsConfiguration[i%this.metronome.numberOfBar];

      switch(beat.soundIndex){
        case 0: await this.delay(60/this.metronome.tempo * 1000 * (4/this.metronome.valueOfBar));
          break;
        case 1 : this.audio1.play();
          this.flash(beat)
          await this.delay(60/this.metronome.tempo*1000 * (4/this.metronome.valueOfBar) - this.audio1.duration);
          break;
          case 2 : this.audio2.play();
          this.flash(beat)
          await this.delay(60/this.metronome.tempo*1000 * (4/this.metronome.valueOfBar)- this.audio2.duration);
      }
    }
  }

  protected delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms));
  }

  private async flash(beat: Beat) {
    beat.flashState = 'in';
    await this.delay(100);
    beat.flashState = 'out';
  }


}