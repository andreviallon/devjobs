import { Component, Input } from '@angular/core';
import { Job } from 'src/app/states/jobsState/jobState.state';

@Component({
  selector: 'how-to-apply',
  template: `
    <div class="card">
      <h3>How to Apply</h3>
      <div class="how-to-apply" [innerHtml]="job.how_to_apply"></div>
    </div>
  `,
  styleUrls: ['./how-to-apply.component.scss']
})
export class HowToApplyComponent {
  @Input() job!: Job;
}
