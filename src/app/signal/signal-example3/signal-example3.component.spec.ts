import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import SignalExample3Component from './signal-example3.component';
import { TestBed } from '@angular/core/testing';

describe('Example 3', () => {
  let component: SignalExample3Component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignalExample3Component, CommonModule, MatButtonModule],
    }).compileComponents();
    component = TestBed.createComponent(
      SignalExample3Component
    ).componentInstance;
  });

  it('should initialize example 3', () => {
    expect(component).toBeTruthy();
  });

  it('intial name is Hive Streaming', () => {
    expect(component.name()).toEqual('Hive Streaming');
  });

  it('Update name to Ekow Baah', () => {
    component.updateName('Ekow Baah');
    expect(component.name()).toEqual('Ekow Baah');
  });
});
