import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Navigate } from '@ngxs/router-plugin';
import { Store } from '@ngxs/store';
import { Job } from 'src/app/states/jobsState/jobState.state';

@Component({
  selector: 'job-card',
  template: `
    <div class="card" (click)="navigateToJob.emit(job.id)">
      <img src="{{ job.company_logo }}" />
      <div class="flex-container">
        <p>{{ job.type }}</p>
        <div class="dot"></div>
      </div>
      <h3>{{ job.title }}</h3>
      <p>{{ job.company }}</p>
      <h4 class="capitalize location">{{ job.location }}</h4>
    </div>
  `,
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent {
  @Input() job!: Job;
  @Output() navigateToJob = new EventEmitter<string>();
}
