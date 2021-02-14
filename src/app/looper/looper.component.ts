import { Component, OnDestroy, OnInit } from '@angular/core';
import { Metronome } from '../metronome-configurator/metronome';
import { MetronomeComponent } from '../metronome/metronome.component';

@Component({
  selector: 'app-looper',
  templateUrl: './looper.component.html',
  styleUrls: ['./looper.component.scss']
})
export class LooperComponent extends MetronomeComponent implements OnInit, OnDestroy {

  barToRecord: number;
  recordButton: string;
  isRecording: boolean;

  constructor() { 
    super();
    this.recordButton = "waitingRecord";
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.metronome = new Metronome();
    this.barToRecord = 1;
  }

  ngOnDestroy() {
    this.isPlaying = false;
  }

  async record() {
    if(!this.isRecording) {
      this.recordButton = "waitingOneBar";
      this.isRecording = true;
      this.playMetronome();
      await this.delay(60/this.metronome.tempo*1000 * (4/this.metronome.valueOfBar) * this.metronome.numberOfBar);
      this.recordButton = "recording";
      await this.delay(60/this.metronome.tempo*1000 * (4/this.metronome.valueOfBar) * this.metronome.numberOfBar * this.barToRecord);
      this.recordButton = "recordSave";
      this.isRecording = false;
    }
  }

}
