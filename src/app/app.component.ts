import { Component, OnInit } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { FetchJobs } from './states/jobsState/jobState.state.action';

@Component({
  selector: 'app-root',
  template: `
    <header></header>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @Dispatch() fetchJobs = (pageIndex: number) => new FetchJobs(pageIndex);

  public ngOnInit(): void {
    this.fetchJobs(1);
  }
}
