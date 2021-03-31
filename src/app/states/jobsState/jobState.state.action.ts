import { ISearchParams } from "src/app/components/filter/filter.component";
import { Job } from "./jobState.state";

export class FetchJobs {
  static readonly type = '[Jobs State] Fetch jobs';
  constructor(public pageIndex: number) { }
}

export class FetchJobsSuccess {
  static readonly type = '[Jobs State] Fetch jobs success';
  constructor(public jobs: Job[], public pageIndex: number) { }
}

export class FetchJob {
  static readonly type = '[Jobs State] Fetch job';
  constructor(public jobId: string) { }
}

export class FetchJobSuccess {
  static readonly type = '[Jobs State] Fetch job success';
  constructor(public job: Job) { }
}

export class SetSelectedJob {
  static readonly type = '[Jobs State] Set selected job';
  constructor(public jobId: string) { }
}

export class SetSearchQuery {
  static readonly type = '[Jobs State] Set search query';
  constructor(public searchParams: ISearchParams) { }
}
