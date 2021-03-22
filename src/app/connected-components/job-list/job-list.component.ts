import { Component, OnInit } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Job, JobsState } from 'src/app/states/jobsState/jobState.state';
import { FetchJobs } from 'src/app/states/jobsState/jobState.state.action';

@Component({
  selector: 'job-list',
  template: `
    <div *ngIf="fetchingJobs$ | async" class="loading-container">
      <loading-spinner></loading-spinner>
    </div>
    <ng-container *ngIf="(jobs$ | async) as jobs">
      <div class="jobs-list-container">
        <job-card *ngFor="let job of jobs" [job]="job"></job-card>
      </div>
    </ng-container>
  `,
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit { 
  @Select(JobsState.jobs) jobs$!: Observable<Job[]>;
  @Select(JobsState.fetchingJobs) fetchingJobs$!: Observable<boolean>;

  @Dispatch() fetchJobs = (pageIndex: number) => new FetchJobs(pageIndex);

  public ngOnInit(): void {
    this.fetchJobs(1);
  }
}
