import { Component, Input } from '@angular/core';
import { Job } from 'src/app/states/jobsState/jobState.state';

@Component({
  selector: 'job-card',
  template: `
    <div class="card">
      <p>{{ job.title }}</p>
    </div>
  `,
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent {
  @Input() job!: Job;
}
