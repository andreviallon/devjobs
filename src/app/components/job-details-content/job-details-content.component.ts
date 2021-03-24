import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Job } from 'src/app/states/jobsState/jobState.state';
import * as moment from 'moment';

@Component({
  selector: 'job-details-content',
  template: `
    <div class="card">
      <div class="header">
        <div class="header-content">
          <div class="flex-container">
            <span class="time">{{ timePosted }}</span>
            <div class="dot"></div>
            <span>{{ job.type }}</span>
          </div>
          <h1>{{ job.title }}</h1>
          <h4>{{ job.location }}</h4>
        </div>
        <div class="button-container">
        <app-button [text]="'Apply Now'" [buttonType]="'primary'" (click)="openJobUrl.emit(job.url)"></app-button>
        </div>
      </div>
      <div class="job-description">
        <div [innerHtml]="job.description"></div>
      </div>
    </div>
  `,
  styleUrls: ['./job-details-content.component.scss']
})
export class JobDetailsContentComponent {
  @Input() job!: Job;
  @Output() openJobUrl = new EventEmitter<string>();

  public timePosted!: string;

  public ngOnChanges(): void {
    this.timePosted = moment(this.job?.created_at).fromNow();
  }
}
