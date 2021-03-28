import { Action, Selector, State, StateContext, StateToken } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { ImmutableContext } from "@ngxs-labs/immer-adapter";
import { FetchJob, FetchJobs, FetchJobsSuccess, FetchJobSuccess, SetSearchQuery, SetSelectedJob } from "./jobState.state.action";
import axios from "axios";

const JOBS_API = 'https://cors.bridged.cc/https://jobs.github.com/positions';

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
  searchQuery: string;
}

export const JobsStateModelDefaults: JobsStateModel = {
  jobs: {},
  selectedJobId: undefined,
  pageIndex: 1,
  fetchingJobs: false,
  errorMessage: '',
  searchQuery: ''
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
  static jobs(state: JobsStateModel): Job[] {
    return Object.keys(state.jobs).length ? Object.values(state.jobs) : [];
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
  static pageIndex(state: JobsStateModel): number {
    return state.pageIndex;
  }

  @Selector([JOBS_STATE])
  static selectedJob(state: JobsStateModel): Job | undefined {
    return state.jobs && state.selectedJobId ? state.jobs[state.selectedJobId] : undefined;
  }

  @Action(FetchJobs)
  @ImmutableContext()
  async fetchJobs({ setState, dispatch, getState }: StateContext<JobsStateModel>, { pageIndex }: FetchJobs) {
    try {
      setState((state: JobsStateModel) => {
        state.fetchingJobs = true;
        state.errorMessage = '';
        return state;
      });

      const searchQuery = getState().searchQuery;

      const baseApi = `${JOBS_API}.json?page=${pageIndex}`;
      const api = searchQuery ? `${baseApi}&description=${searchQuery}` : baseApi;
      const { data } = await axios.get(api);

      dispatch(new FetchJobsSuccess(data, pageIndex));
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
  fetchJobsSuccess({ setState }: StateContext<JobsStateModel>, { jobs, pageIndex }: FetchJobsSuccess) {
    setState((state: JobsStateModel) => {
      const jobDictionary: JobDictionary = state.jobs;

      for (const job of jobs) {
        jobDictionary[job.id] = job;
      }

      state.jobs = jobDictionary;
      state.fetchingJobs = false;
      state.pageIndex = pageIndex;

      return state;
    });
  }

  @Action(FetchJob)
  @ImmutableContext()
  async fetchJob({ getState, setState, dispatch }: StateContext<JobsStateModel>, { jobId }: FetchJob) {
    try {
      if (getState().jobs[jobId]) {
        return;
      }

      setState((state: JobsStateModel) => {
        state.fetchingJobs = true;
        state.errorMessage = '';
        return state;
      });

      const { data } = await axios.get(`${JOBS_API}/${jobId}.json`);

      dispatch(new FetchJobSuccess(data));
    } catch (err) {
      setState((state: JobsStateModel) => {
        state.fetchingJobs = false;
        state.errorMessage = 'No job found.';
        return state;
      });
    }
  }

  @Action(FetchJobSuccess)
  @ImmutableContext()
  fetchJobSuccess({ setState }: StateContext<JobsStateModel>, { job }: FetchJobSuccess) {
    setState((state: JobsStateModel) => {
      state.jobs[job.id] = job;
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

  @Action(SetSearchQuery)
  @ImmutableContext()
  setSearchQuery({ setState }: StateContext<JobsStateModel>, { searchQuery }: SetSearchQuery) {
    setState((state: JobsStateModel) => {
      state.searchQuery = searchQuery;
      state.jobs = {};
      return state;
    });
  }
}
