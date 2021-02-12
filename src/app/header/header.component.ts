import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../electron.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private elctronService: ElectronService) { }

  ngOnInit(): void {
  }

  minimizeWindow() {
    this.elctronService.window.minimize();
  }

  closeWindow() {
    this.elctronService.window.close();
  }
}
