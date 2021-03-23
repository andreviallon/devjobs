import { Job } from "./jobState.state";

export class FetchJobs {
  static readonly type = '[Jobs State] Fetch jobs';
  constructor(public pageIndex: number) { }
}

export class FetchJobsSuccess {
  static readonly type = '[Jobs State] Fetch jobs success';
  constructor(public jobs: Job[]) { }
}

export class SetSelectedJob {
  static readonly type = '[Jobs State] Set selected job';
  constructor(public jobId: string) { }
}
