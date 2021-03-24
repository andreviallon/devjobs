import { Component, Input } from '@angular/core';
import { Job } from 'src/app/states/jobsState/jobState.state';
import { ButtonType } from '../button/button.component';

@Component({
  selector: 'job-header',
  template: `
    <div class="card">
      <div class="column-container">
        <div class="left-side">
          <img src="{{ job.company_logo }}" />
          <div class="row-container">
            <h3>{{job.title}}</h3>
            <p>{{job.company}}</p>
          </div>
        </div>
        <div class="button-container">
          <app-button [text]="'Company Site'" [buttonType]="'secondary'"></app-button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./job-header.component.scss']
})
export class JobHeaderComponent {
  @Input() job!: Job;

  ngOnInit() {
    console.log('job header comp', this.job);
  }
}
