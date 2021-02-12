import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tempo',
  templateUrl: './tempo.component.html',
  styleUrls: ['./tempo.component.scss']
})
export class TempoComponent implements OnInit {

  @Input()
  label: string;

  @Input()
  value: number;

  @Output()
  valueChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onValueChange() {
    this.valueChange.emit(this.value);
  }

}
