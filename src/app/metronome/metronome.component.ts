import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metronome',
  templateUrl: './metronome.component.html',
  styleUrls: ['./metronome.component.scss']
})
export class MetronomeComponent implements OnInit {

  tempo: number;
  beatPerBar: number;
  valueOfBeat: number;
  beatPerBarTable: Array<number>;
  beatsStyle: any;
  isPlaying: boolean;
  audio1: HTMLAudioElement;
  audio2: HTMLAudioElement;


  constructor() { }

  ngOnInit(): void {
    this.tempo = 90;
    this.beatPerBar = 4;
    this.valueOfBeat = 4;
    this.isPlaying = false;
    this.initBeatPerBarTable();
    this.changeBeatStyle();

    this.audio1 = new Audio();
    this.audio1.src = '../../assets/audio/metronome1.wav';
    this.audio1.load();
    this.audio2 = new Audio();
    this.audio2.src = '../../assets/audio/metronome2.wav';
    this.audio2.load();
  }

  initBeatPerBarTable() {
    this.beatPerBarTable = new Array();
    for(let i = 0; i< this.beatPerBar; i++) {
      this.beatPerBarTable.push(1);
    }
  }

  changeBeatPerBar() {
    if(this.beatPerBar > this.beatPerBarTable.length) {
      this.beatPerBarTable.push(1);
    } else {
      this.beatPerBarTable.splice(this.beatPerBar, this.beatPerBar);
    }

    this.changeBeatStyle();
  }

  changeBeatStyle() {
    this.beatsStyle = {display: 'grid',
      'grid-template-columns': `repeat(${this.beatPerBar}, 1fr)`,
      'justify-items': 'center',
      'align-items': 'end',
      'height': '150px'
    };
  }

  beatStyle(number: number) {
    if(number != 0) {
      return {'height': `${50 *number}px`};
    } 
    return {'height': '50px',
            'background-color': '#D4D4D4'};
  }

  changeBeat(index: number) {
    this.beatPerBarTable[index] = ++this.beatPerBarTable[index]%3;
  }

  async playMetronome(){
  
    this.isPlaying = !this.isPlaying;

    for(let i=0; this.isPlaying; i++) {
      switch(this.beatPerBarTable[i%this.beatPerBar]){
        case 0: await this.delay(60/this.tempo * 1000 * (4/this.valueOfBeat));
          break;
        case 1 : this.audio1.play();
          await this.delay(60/this.tempo*1000 * (4/this.valueOfBeat) - this.audio1.duration);
          break;
          case 2 : this.audio2.play();
          await this.delay(60/this.tempo*1000 * (4/this.valueOfBeat)- this.audio2.duration);
      }
    }
  }

  private delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms));
  }

}