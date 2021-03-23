import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Select } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { Job, JobsState } from 'src/app/states/jobsState/jobState.state';
import { SetSelectedJob } from 'src/app/states/jobsState/jobState.state.action';

@Component({
  selector: 'job-details',
  template: `
    <div *ngIf="fetchingJobs$ | async" class="loading-container">
      <loading-spinner></loading-spinner>
    </div>
    <ng-container *ngIf="selectedJob$ | async as selectedJob">
      <job-header [job]="selectedJob"></job-header>
    </ng-container>
  `,
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {
  @Select(JobsState.selectedJob) selectedJob$!: Observable<Job>;
  @Select(JobsState.fetchingJobs) fetchingJobs$!: Observable<boolean>;

  @Dispatch() setSelectedJob = (jobId: string) => new SetSelectedJob(jobId);

  private subscription = new Subscription();

  constructor(private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.subscription.add(this.route.params.subscribe(params => {
      this.setSelectedJob(params.id);
    }))
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
