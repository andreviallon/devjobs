import { Component, Input } from '@angular/core';
import { Job } from 'src/app/states/jobsState/jobState.state';

@Component({
  selector: 'job-card',
  template: `
    <div class="card">
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
}
