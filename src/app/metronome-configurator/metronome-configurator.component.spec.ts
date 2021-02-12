import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetronomeConfiguratorComponent } from './metronome-configurator.component';

describe('MetronomeConfiguratorComponent', () => {
  let component: MetronomeConfiguratorComponent;
  let fixture: ComponentFixture<MetronomeConfiguratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetronomeConfiguratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetronomeConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
