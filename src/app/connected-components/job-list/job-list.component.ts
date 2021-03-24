import { Component } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Navigate } from '@ngxs/router-plugin';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Job, JobsState } from 'src/app/states/jobsState/jobState.state';

@Component({
  selector: 'job-list',
  template: `
    <div class="container">
      <div *ngIf="fetchingJobs$ | async" class="loading-container">
        <loading-spinner></loading-spinner>
      </div>
      <ng-container *ngIf="(jobs$ | async) as jobs">
        <div class="jobs-list-container">
          <job-card *ngFor="let job of jobs" [job]="job" (navigateToJob)="navigateToJob($event)"></job-card>
        </div>
      </ng-container>
    </div>
  `,
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent { 
  @Select(JobsState.jobs) jobs$!: Observable<Job[]>;
  @Select(JobsState.fetchingJobs) fetchingJobs$!: Observable<boolean>;

  @Dispatch() navigateToJob = (jobId: string) => new Navigate(['/job', jobId]);
}
