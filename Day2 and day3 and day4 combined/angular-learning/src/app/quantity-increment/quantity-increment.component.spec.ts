import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityIncrementComponent } from './quantity-increment.component';

import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

describe('QuantityIncrementComponent', () => {
  let component: QuantityIncrementComponent;
  let fixture: ComponentFixture<QuantityIncrementComponent>;
  let debugElement: DebugElement;

  imports:[FormsModule]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantityIncrementComponent ]
    })
    .compileComponents();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
