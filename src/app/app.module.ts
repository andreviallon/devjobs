import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DARK_MODE_OPTIONS } from 'angular-dark-mode';
import { DarkModeToggleComponent } from './components/dark-mode-toggle/dark-mode-toggle.component';
import { HeaderComponent } from './components/header/header.component';
import { JobCardComponent } from './components/job-card/job-card.component';
import { JobListComponent } from './connected-components/job-list/job-list.component';
import { JobsState } from './states/jobsState/jobState.state';
import { NgxsModule } from '@ngxs/store';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { JobDetailsComponent } from './connected-components/job-details/job-details.component';
import { JobDetailsHeaderComponent } from './components/job-details-header/job-details-header.component';
import { ButtonComponent } from './components/button/button.component';
import { JobDetailsContentComponent } from './components/job-details-content/job-details-content.component';
import { HowToApplyComponent } from './components/how-to-apply/how-to-apply.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DarkModeToggleComponent,
    JobListComponent,
    JobCardComponent,
    LoadingSpinnerComponent,
    JobDetailsComponent,
    JobDetailsHeaderComponent,
    ButtonComponent,
    JobDetailsContentComponent,
    HowToApplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([JobsState]),
    NgxsRouterPluginModule.forRoot(),
    NgxsDispatchPluginModule.forRoot(),
  ],
  providers: [
    {
      provide: DARK_MODE_OPTIONS,
      useValue: {
          darkModeClass: 'my-dark-mode',
          lightModeClass: 'my-light-mode'
      }
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
