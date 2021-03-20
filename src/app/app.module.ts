import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DarkModeToggleComponent } from './components/dark-mode-toggle/dark-mode-toggle.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderConnectedComponent } from './connected-components/header-connected/header-connected.component';

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
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
