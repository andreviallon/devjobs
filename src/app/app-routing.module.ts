import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobDetailsComponent } from './connected-components/job-details/job-details.component';
import { JobListComponent } from './connected-components/job-list/job-list.component';

const routes: Routes = [
  { path: '', component: JobListComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'job/:id', component: JobDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
