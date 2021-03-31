import { Component, OnDestroy, OnInit } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Navigate } from '@ngxs/router-plugin';
import { Select } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { ISearchParams } from 'src/app/components/filter/filter.component';
import { Job, JobsState } from 'src/app/states/jobsState/jobState.state';
import { FetchJobs, SetSearchQuery } from 'src/app/states/jobsState/jobState.state.action';

@Component({
  selector: 'job-list',
  template: `
    <filter (search)="search($event)"></filter>
    <div class="jobs-container">
      <div *ngIf="fetchingJobs" class="loading-container">
        <loading-spinner></loading-spinner>
      </div>
      <ng-container *ngIf="(jobs$ | async) as jobs">
      <h3 class="no-jobs-found" *ngIf="!fetchingJobs && jobs.length == 0">No jobs found... :(</h3>
        <ng-container *ngIf="jobs.length">
          <div class="jobs-list-container">
            <job-card *ngFor="let job of jobs" [job]="job" (navigateToJob)="navigateToJob($event)"></job-card>
          </div>
          <div class="button-container">
            <app-button [text]="'Load more'" [buttonType]="'primary'" [loading]="fetchingJobs$ | async" (click)="loadJobs()"></app-button>
          </div>
        </ng-container>
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
  @Dispatch() setSearchQuery = (searchParams: ISearchParams) => new SetSearchQuery(searchParams);

  private subscription = new Subscription();

  public pageIndex: number = 1;
  public fetchingJobs: boolean = false;

  public ngOnInit(): void {
    this.subscription.add(
      this.pageIndex$.subscribe((pageIndex: number) => this.pageIndex = pageIndex)
    );

    this.subscription.add(
      this.fetchingJobs$.subscribe(fetchingJobs => this.fetchingJobs = fetchingJobs)
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public loadJobs(): void {
    const nextPage = this.pageIndex + 1;
    this.fetchJobs(nextPage);
  }

  public search(searchParams: ISearchParams): void {
    this.setSearchQuery(searchParams);
    this.fetchJobs(0);
  }
}
