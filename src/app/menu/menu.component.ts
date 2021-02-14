import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() isDisplayMetronome: boolean;
  @Output() isDisplayMetronomeChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  displayMetronome(displayMetronome: boolean) {
    this.isDisplayMetronomeChange.emit(displayMetronome);
  }
}
