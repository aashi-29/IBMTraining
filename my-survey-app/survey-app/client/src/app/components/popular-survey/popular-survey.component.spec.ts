import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularSurveyComponent } from './popular-survey.component';

describe('PopularSurveyComponent', () => {
  let component: PopularSurveyComponent;
  let fixture: ComponentFixture<PopularSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
