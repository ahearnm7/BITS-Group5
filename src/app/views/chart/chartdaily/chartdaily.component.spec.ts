import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartdailyComponent } from './chartdaily.component';

describe('ChartdailyComponent', () => {
  let component: ChartdailyComponent;
  let fixture: ComponentFixture<ChartdailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartdailyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartdailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
