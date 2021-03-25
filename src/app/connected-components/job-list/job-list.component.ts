import { Component, OnDestroy, OnInit } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Navigate } from '@ngxs/router-plugin';
import { Select } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { Job, JobsState } from 'src/app/states/jobsState/jobState.state';
import { FetchJobs } from 'src/app/states/jobsState/jobState.state.action';

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
        <div class="button-container">
          <app-button [text]="'Load more'" [buttonType]="'primary'" [loading]="fetchingJobs$ | async" (click)="loadJobs()"></app-button>
        </div>
      </ng-container>
    </div>
  `,
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit, OnDestroy { 
  @Select(JobsState.jobs) jobs$!: Observable<Job[]>;
  @Select(JobsState.fetchingJobs) fetchingJobs$!: Observable<boolean>;
  @Select(JobsState.pageIndex) pageIndex$!: Observable<number>;

  @Dispatch() navigateToJob = (jobId: string) => new Navigate(['/job', jobId]);
  @Dispatch() fetchJobs = (pageIndex: number) => new FetchJobs(pageIndex);

  private subscription = new Subscription();

  public pageIndex: number = 1;

  public ngOnInit(): void {
    this.subscription.add(
      this.pageIndex$.subscribe((pageIndex: number) => this.pageIndex = pageIndex)
    )
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public loadJobs(): void {
    const nextPage = this.pageIndex + 1;
    this.fetchJobs(nextPage);
  }
}
