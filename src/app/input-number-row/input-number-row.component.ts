import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-number-row',
  templateUrl: './input-number-row.component.html',
  styleUrls: ['./input-number-row.component.scss']
})
export class InputNumberRowComponent implements OnInit {
  
  @Input()
  label: string

  @Input()
  min: number;

  @Input()
  max: number;

  @Input()
  step: number;

  @Input()
  value: number;

  @Output()
  valueChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.label);
  }

  add() {
    if(this.value != undefined && this.value != null) {
      this.value = this.value + this.step;

      if(this.max && this.value > this.max) {
        this.value = this.max;
      }
      this.valueChange.emit(this.value);
    }
  }

  remove() {
    if(this.value != undefined && this.value != null) {
      this.value -= this.step;

      if(this.min != undefined && this.min != null && this.value < this.min) {
        this.value = this.min;
      }
    }
    this.valueChange.emit(this.value);
  }

}
