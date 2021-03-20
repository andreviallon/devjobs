import { Component } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';

@Component({
  selector: 'header-connected',
  template: `
    <header [darkMode]="darkMode$ | async" (toggleDarkMode)="toggleDarkMode()"></header>
  `,
  styleUrls: ['./header-connected.component.scss']
})
export class HeaderConnectedComponent {
  public darkMode$: Observable<boolean | null> = this.darkModeService.darkMode$;

  constructor(private darkModeService: DarkModeService) {}

  public toggleDarkMode(): void {
    this.darkModeService.toggle();
  }
}
