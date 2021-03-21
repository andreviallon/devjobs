import { Component, Input } from '@angular/core';
import { Job } from 'src/app/states/jobsState/jobState.state';

@Component({
  selector: 'job-card',
  template: `
    <div class="card">
      <h3>{{ job.title }}</h3>
      <p>{{ job.company }}</p>
    </div>
  `,
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent {
  @Input() job!: Job;
}
