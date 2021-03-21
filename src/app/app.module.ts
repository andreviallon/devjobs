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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DarkModeToggleComponent,
    JobListComponent,
    JobCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
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
