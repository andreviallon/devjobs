import { Component } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';

@Component({
  selector: 'dark-mode-toggle',
  template: `
    <div class="container">
      <fa-icon [icon]="faSun"></fa-icon>
        <label class="switch">
          <input type="checkbox" type="checkbox" [checked]="darkMode$ | async" (change)="onToggle()">
          <span class="slider"></span>
        </label>
      <fa-icon [icon]="faMoon"></fa-icon>
    </div>
  `,
  styleUrls: ['./dark-mode-toggle.component.scss']
})
export class DarkModeToggleComponent {
  public faMoon = faMoon;
  public faSun = faSun;
  public darkMode: boolean = false;

  public darkMode$: Observable<boolean> = this.darkModeService.darkMode$;
 
  constructor(private darkModeService: DarkModeService) {}
 
  onToggle(): void {
    this.darkModeService.toggle();
  }
}
