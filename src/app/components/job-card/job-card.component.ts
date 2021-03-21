import { Component, Input } from '@angular/core';
import { Job } from 'src/app/states/jobsState/jobState.state';

@Component({
  selector: 'job-card',
  template: `
    <p>{{ job.title }}</p>
  `,
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent {
  @Input() job!: Job;
}
