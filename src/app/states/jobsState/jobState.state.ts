import { Action, Selector, State, StateContext, StateToken } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { ImmutableContext } from "@ngxs-labs/immer-adapter";
import { FetchJobs, FetchJobsSuccess, SetSelectedJob } from "./jobState.state.action";
import axios from "axios";

const JOBS_API = 'https://cors.bridged.cc/https://jobs.github.com/positions.json';

export interface Job {
  id: string;
  type: string;
  url: string;
  created_at: string;
  company: string;
  company_url: string;
  location: string;
  title: string;
  description: string;
  how_to_apply: string;
  company_logo: string;
}

export interface JobDictionary {
  [key: string]: Job
}

export interface JobsStateModel {
  jobs: JobDictionary;
  selectedJobId: string | undefined;
  pageIndex: number;
  fetchingJobs: boolean;
  errorMessage: string;
}

export const JobsStateModelDefaults: JobsStateModel = {
  jobs: {},
  selectedJobId: undefined,
  pageIndex: 0,
  fetchingJobs: false,
  errorMessage: ''
};

export const JOBS_STATE = new StateToken<JobsStateModel>(
  "jobsState"
);

@State({
  name: JOBS_STATE,
  defaults: JobsStateModelDefaults
})
@Injectable()
export class JobsState {
  @Selector([JOBS_STATE])
  static jobs(state: JobsStateModel): Job[] | null {
    return Object.keys(state.jobs).length ? Object.values(state.jobs) : null;
  }

  @Selector([JOBS_STATE])
  static fetchingJobs(state: JobsStateModel): boolean {
    return state.fetchingJobs;
  }

  @Selector([JOBS_STATE])
  static errorMessage(state: JobsStateModel): string {
    return state.errorMessage;
  }
  
  @Selector([JOBS_STATE])
  static selectedJob(state: JobsStateModel): Job | undefined {
    return state.jobs && state.selectedJobId ? state.jobs[state.selectedJobId] : undefined;
  }

  @Action(FetchJobs)
  @ImmutableContext()
  async fetchJobs({ setState, dispatch }: StateContext<JobsStateModel>, { pageIndex }: FetchJobs) {
    try {
      setState((state: JobsStateModel) => {
        state.fetchingJobs = true;
        state.errorMessage = '';
        return state;
      });

      const { data } = await axios.get(`${JOBS_API}?page=${pageIndex}`);

      dispatch(new FetchJobsSuccess(data));
    } catch (err) {
      setState((state: JobsStateModel) => {
        state.fetchingJobs = false;
        state.errorMessage = 'No jobs found.';
        return state;
      });
    }
  }

  @Action(FetchJobsSuccess)
  @ImmutableContext()
  fetchJobsSuccess({ setState }: StateContext<JobsStateModel>, { jobs }: FetchJobsSuccess) {
    const jobDictionary: JobDictionary = {};

    for (const job of jobs) {
      jobDictionary[job.id] = job;
    }

    setState((state: JobsStateModel) => {
      state.jobs = jobDictionary;
      state.fetchingJobs = false;
      return state;
    });
  }

  @Action(SetSelectedJob)
  @ImmutableContext()
  setSelectedJob({ setState }: StateContext<JobsStateModel>, { jobId }: SetSelectedJob) {
    setState((state: JobsStateModel) => {
      state.selectedJobId = jobId;
      return state;
    });
  }
}
