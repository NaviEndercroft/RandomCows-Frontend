import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomCowComponent } from './random-cow.component';

describe('RandomCowComponent', () => {
  let component: RandomCowComponent;
  let fixture: ComponentFixture<RandomCowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomCowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RandomCowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
