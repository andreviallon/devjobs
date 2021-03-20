import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DarkModeToggleComponent } from './components/dark-mode-toggle/dark-mode-toggle.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderConnectedComponent } from './connected-components/header-connected/header-connected.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DARK_MODE_OPTIONS } from 'angular-dark-mode';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DarkModeToggleComponent,
    HeaderConnectedComponent
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
