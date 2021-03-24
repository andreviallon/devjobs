import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Job } from 'src/app/states/jobsState/jobState.state';

@Component({
  selector: 'job-details-header',
  template: `
    <div class="card">
      <div class="column-container">
        <div class="left-side">
          <img src="{{ job.company_logo }}" />
          <div class="row-container">
            <h3>{{job.title}}</h3>
            <span>{{job.company}}</span>
          </div>
        </div>
        <div class="button-container">
          <app-button [text]="'Company Site'" [buttonType]="'secondary'" (click)="goToCompanySite.emit(job.company_url)"></app-button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./job-details-header.component.scss']
})
export class JobDetailsHeaderComponent {
  @Input() job!: Job;

  @Output() goToCompanySite = new EventEmitter<string>();
}
