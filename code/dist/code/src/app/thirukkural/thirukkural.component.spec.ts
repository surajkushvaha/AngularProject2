import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirukkuralComponent } from './thirukkural.component';

describe('ThirukkuralComponent', () => {
  let component: ThirukkuralComponent;
  let fixture: ComponentFixture<ThirukkuralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirukkuralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirukkuralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
