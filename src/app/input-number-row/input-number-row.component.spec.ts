import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNumberRowComponent } from './input-number-row.component';

describe('InputNumberRowComponent', () => {
  let component: InputNumberRowComponent;
  let fixture: ComponentFixture<InputNumberRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputNumberRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputNumberRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
