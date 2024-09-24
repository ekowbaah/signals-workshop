import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import SignalExample6Component from './signal-example6.component';
import { TestBed } from '@angular/core/testing';

describe('Example 6', () => {
  let component: SignalExample6Component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignalExample6Component, CommonModule, MatButtonModule],
    }).compileComponents();
    component = TestBed.createComponent(
      SignalExample6Component
    ).componentInstance;
  });

  it('should initialize example 6', () => {
    expect(component).toBeTruthy();
  });

  it('intial username is Hive Streaming', () => {
    expect(component.username()).toEqual('Hive Streaming');
  });
});
