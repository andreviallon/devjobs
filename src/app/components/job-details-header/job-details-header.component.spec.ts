import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailsHeaderComponent } from './job-details-header.component';

describe('JobDetailsHeaderComponent', () => {
  let component: JobDetailsHeaderComponent;
  let fixture: ComponentFixture<JobDetailsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobDetailsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDetailsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
