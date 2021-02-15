import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgAudioRecorderService, OutputFormat } from 'ng-audio-recorder';
import { Metronome } from '../metronome-configurator/metronome';
import { Beat } from '../metronome-configurator/beat';
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

  audioRecording: HTMLAudioElement;

  constructor(private audioRecorderService: NgAudioRecorderService) { 
    super();
    this.recordButton = "waitingRecord";
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.metronome = new Metronome();
    this.audioRecording = new Audio();
    this.audioRecording.loop = true;
    this.barToRecord = 1;
  }

  ngOnDestroy() {
    this.isPlaying = false;
  }

  async playMetronome() {
    let beat: Beat;
    let numberOfBarRecorded: number = this.metronome.numberOfBar * this.barToRecord;

    if(!this.isPlaying) {
      if(!this.isRecording) {
        this.audioRecording.play();
      }
    } else {
      this.audioRecording.pause();
      this.audioRecording.currentTime = 0;
      this.playButton = "playButton";
    }
  
    super.playMetronome();
  }

  async onRecord() {
    if(!this.isRecording) {
      this.record();
    }
  }

  private async record() {
    this.recordButton = "waitingOneBar";
    this.isRecording = true;
    this.playMetronome();

    await this.delay(60/this.metronome.tempo*1000 * (4/this.metronome.valueOfBar) * this.metronome.numberOfBar * 2);

    this.audioRecorderService.startRecording();
    this.recordButton = "recording";

    await this.delay(60/this.metronome.tempo*1000 * (4/this.metronome.valueOfBar) * this.metronome.numberOfBar * this.barToRecord);
    this.isPlaying = false;
    this.audioRecorderService.stopRecording(OutputFormat.WEBM_BLOB_URL).then((output: string) => {
      this.audioRecording.src = output;
      this.audioRecording.play();
      this.isPlaying = false;
    })
    this.recordButton = "recordSave";
    this.isRecording = false;
  }
}
60