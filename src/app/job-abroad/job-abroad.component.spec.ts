import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAbroadComponent } from './job-abroad.component';

describe('JobAbroadComponent', () => {
  let component: JobAbroadComponent;
  let fixture: ComponentFixture<JobAbroadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobAbroadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAbroadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
