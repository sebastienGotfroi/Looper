import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { FlashAnimation } from '../animation/flash';
import { Metronome } from './metronome';
import { Beat} from './beat';

@Component({
  selector: 'metronome-configurator',
  templateUrl: './metronome-configurator.component.html',
  styleUrls: ['./metronome-configurator.component.scss'],
  animations: [FlashAnimation.flash]
})
export class MetronomeConfiguratorComponent implements OnInit, OnChanges {

  @Input() metronome: Metronome;
  @Output() metronomeChange = new EventEmitter<Metronome>();

  beatsStyle: any;

  constructor() { }

  ngOnInit(): void {
    if(!this.metronome) {
      this.metronome = new Metronome();
    }

    this.changeBeatStyle();
  }

  ngOnChanges() {
    this.changeBeatStyle();
  }

  changeBeatPerBar() {
    if(this.metronome.numberOfBar > this.metronome.beatsConfiguration.length) {
      this.metronome.beatsConfiguration.push(new Beat());
    } else {
      this.metronome.beatsConfiguration.splice(this.metronome.numberOfBar, this.metronome.numberOfBar);
    }

    this.changeBeatStyle();
    this.metronomeValueChange();
  }

  changeBeatStyle() {
    this.beatsStyle = {display: 'grid',
      'grid-template-columns': `repeat(${this.metronome.numberOfBar}, 1fr)`,
      'justify-items': 'center',
      'align-items': 'end',
      'height': '150px'
    };
  }

  beatStyle(beat: Beat) {
    if(beat.soundIndex != 0) {
      return {'height': `${50 *beat.soundIndex}px`};
    } 
    return {'height': '50px',
            'background-color': '#D4D4D4'};
  }

  changeBeatSoundIndex(beat: Beat) {
    beat.soundIndex = ++beat.soundIndex%3;
    this.metronomeValueChange();
  }

  metronomeValueChange() {
    this.metronomeChange.emit(this.metronome);
  }
}
