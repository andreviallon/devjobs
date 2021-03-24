import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Job } from 'src/app/states/jobsState/jobState.state';
import * as moment from 'moment';

@Component({
  selector: 'job-card',
  template: `
    <div class="card" (click)="navigateToJob.emit(job.id)">
      <img class="job-img" src="{{ job.company_logo }}" />
      <div class="flex-container">
        <span class="time">{{ timePosted }}</span>
        <div class="dot"></div>
        <span>{{ job.type }}</span>        
      </div>
      <h2>{{ job.title }}</h2>
      <span>{{ job.company }}</span>
      <h4 class="capitalize location">{{ job.location }}</h4>
    </div>
  `,
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnChanges {
  @Input() job!: Job;

  @Output() navigateToJob = new EventEmitter<string>();

  public timePosted!: string;

  public ngOnChanges(): void {
    this.timePosted = moment(this.job?.created_at).fromNow();
  }
}
