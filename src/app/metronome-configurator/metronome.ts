import { Beat } from './beat';

export class Metronome {
    tempo: number;
    valueOfBar: number;
    numberOfBar: number;
    beatsConfiguration: Array<Beat>;

    constructor() {
        this.tempo = 90;
        this.valueOfBar = 4;
        this.numberOfBar = 4;
        this.beatsConfiguration = new Array();

        for(let i=0; i < this.numberOfBar; i++) {
            this.beatsConfiguration.push(new Beat());
        }
    }
}